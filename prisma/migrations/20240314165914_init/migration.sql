-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "signupDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginDate" TIMESTAMP(3),
    "blocked" BOOLEAN NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "personalPageId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "topicId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "custom_int1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_int1_name" TEXT,
    "custom_int2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_int2_name" TEXT,
    "custom_int3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_int3_name" TEXT,
    "custom_string1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string1_name" TEXT,
    "custom_string2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string2_name" TEXT,
    "custom_string3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string3_name" TEXT,
    "custom_text1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text1_name" TEXT,
    "custom_text2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text2_name" TEXT,
    "custom_text3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text3_name" TEXT,
    "custom_bool1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool1_name" TEXT,
    "custom_bool2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool2_name" TEXT,
    "custom_bool3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool3_name" TEXT,
    "custom_date1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_date1_name" TEXT,
    "custom_date2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_date2_name" TEXT,
    "custom_date3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_date3_name" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "custom_int1_value" INTEGER,
    "custom_int2_value" INTEGER,
    "custom_int3_value" INTEGER,
    "custom_string1_value" TEXT,
    "custom_string2_value" TEXT,
    "custom_string3_value" TEXT,
    "custom_text1_value" TEXT,
    "custom_text2_value" TEXT,
    "custom_text3_value" TEXT,
    "custom_bool1_value" BOOLEAN DEFAULT false,
    "custom_bool2_value" BOOLEAN DEFAULT false,
    "custom_bool3_value" BOOLEAN DEFAULT false,
    "custom_date1_value" TIMESTAMP(3),
    "custom_date2_value" TIMESTAMP(3),
    "custom_date3_value" TIMESTAMP(3),

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_personalPageId_key" ON "User"("personalPageId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_itemId_key" ON "Like"("userId", "itemId");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemTags_AB_unique" ON "_ItemTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemTags_B_index" ON "_ItemTags"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_personalPageId_fkey" FOREIGN KEY ("personalPageId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemTags" ADD CONSTRAINT "_ItemTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemTags" ADD CONSTRAINT "_ItemTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
