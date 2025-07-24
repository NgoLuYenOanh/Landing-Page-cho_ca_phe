import { writeFile, readFile, unlink } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
type Post = {
  id: number;
  productName: string;
  store: string;
  address: string;
  title: string;
  description: string;
  images: string[];
};

const uploadDir = path.join(process.cwd(), "public/uploads");
const postsFilePath = path.join(uploadDir, "posts.json");
const postsFile = path.join(process.cwd(), "public", "uploads", "posts.json");

// Hàm đọc file JSON
async function readPostsFile(): Promise<Post[]> {
  try {
    const file = await readFile(postsFilePath, "utf-8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

// POST - Thêm bài viết mới

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Dữ liệu nhận được:", body);

    // Đọc file hiện tại
    let posts: Post[] = [];

    if (fs.existsSync(postsFile)) {
      const fileData = fs.readFileSync(postsFile, "utf-8");
      posts = JSON.parse(fileData || "[]");
    }

    const newPost = {
      id: Date.now(),
      ...body,
    };

    posts.push(newPost);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2), "utf-8");

    return NextResponse.json({
      message: "Tạo bài đăng thành công",
      post: newPost,
    });
  } catch (error) {
    console.error("Lỗi khi lưu bài:", error);
    return NextResponse.json(
      { error: "Lỗi server khi lưu bài đăng" },
      { status: 500 }
    );
  }
}

// GET - Lấy danh sách bài viết
export async function GET() {
  try {
    const posts = await readPostsFile();

    // Sắp xếp bài mới nhất lên đầu
    posts.sort((a, b) => b.id - a.id);

    return NextResponse.json(posts);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

// PUT - Cập nhật bài viết
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updatedData } = body;

    if (!id) {
      return NextResponse.json({ message: "Thiếu ID" }, { status: 400 });
    }

    const posts = await readPostsFile();
    const index = posts.findIndex((p) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { message: "Không tìm thấy bài viết" },
        { status: 404 }
      );
    }

    posts[index] = { ...posts[index], ...updatedData };

    await writeFile(postsFilePath, JSON.stringify(posts, null, 2), "utf-8");
    return NextResponse.json({
      message: "Cập nhật thành công",
      data: posts[index],
    });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ message: "Lỗi cập nhật" }, { status: 500 });
  }
}

// DELETE - Xoá bài viết và ảnh vật lý
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));
    if (!id) return NextResponse.json({ message: "Thiếu ID" }, { status: 400 });

    const posts = await readPostsFile();
    const postToDelete = posts.find((p) => p.id === id);

    if (!postToDelete) {
      return NextResponse.json(
        { message: "Không tìm thấy bài viết" },
        { status: 404 }
      );
    }

    // Xoá ảnh vật lý nếu có
    if (Array.isArray(postToDelete.images)) {
      for (const img of postToDelete.images) {
        const imgPath = path.join(uploadDir, path.basename(img));
        try {
          await unlink(imgPath);
        } catch {
          console.warn("Không thể xoá ảnh:", imgPath);
        }
      }
    }

    const newPosts = posts.filter((post) => post.id !== id);
    await writeFile(postsFilePath, JSON.stringify(newPosts, null, 2), "utf-8");

    return NextResponse.json({ message: "Xoá thành công" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ message: "Lỗi xoá" }, { status: 500 });
  }
}
