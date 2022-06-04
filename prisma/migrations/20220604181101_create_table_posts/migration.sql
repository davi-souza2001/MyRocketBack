-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userNick" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "likes" JSONB NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
