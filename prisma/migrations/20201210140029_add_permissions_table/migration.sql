-- AlterTable
ALTER TABLE "User" ADD COLUMN     "permissionId" INTEGER;

-- CreateTable
CREATE TABLE "Permission" (
"id" SERIAL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY("permissionId")REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
