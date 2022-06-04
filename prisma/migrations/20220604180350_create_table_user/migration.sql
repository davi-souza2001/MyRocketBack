-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "seniority" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "comumone" TEXT NOT NULL,
    "comumtwo" TEXT NOT NULL,
    "comumthree" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "gas" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_github_key" ON "users"("github");
