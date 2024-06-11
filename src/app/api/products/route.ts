import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fields: { [key: string]: string } = {};
    const files: { [key: string]: File[] } = {};

    formData.forEach((value, key) => {
      if (value instanceof File) {
        if (!files[key]) {
          files[key] = [];
        }
        files[key].push(value);
      } else {
        fields[key] = value.toString();
      }
    });

    const { title, slug, price, description, moreDetails, category, featured } =
      fields;

    if (!title || !slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    // Verificar se o slug já existe
    const existingProduct = await prisma.product.findUnique({
      where: { slug },
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 }
      );
    }

    let mainImagePath = "";
    if (files.mainImage && files.mainImage.length > 0) {
      const uniqueName = `${Date.now()}-${files.mainImage[0].name}`;
      mainImagePath = path.join("/images", uniqueName);
      const mainImageBuffer = Buffer.from(
        await files.mainImage[0].arrayBuffer()
      );
      await fs.writeFile(`./public${mainImagePath}`, mainImageBuffer);
    }

    const imagePaths = [];
    if (files.images && files.images.length <= 3) {
      for (const image of files.images) {
        const uniqueName = `${Date.now()}-${image.name}`;
        const imagePath = path.join("/images", uniqueName);
        const imageBuffer = Buffer.from(await image.arrayBuffer());
        await fs.writeFile(`./public${imagePath}`, imageBuffer);
        imagePaths.push(imagePath);
      }
    } else if (files.images && files.images.length > 3) {
      return NextResponse.json(
        { error: "You can upload up to 3 images" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        title,
        slug,
        price: parseFloat(price),
        description,
        moreDetails,
        category,
        featured: featured === "true",
        mainImage: mainImagePath,
        images: {
          create: imagePaths.map(path => ({ path })),
        },
      },
    });

    return NextResponse.json(
      { message: "Product created successfully!", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
