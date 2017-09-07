using Microsoft.EntityFrameworkCore.Migrations;

namespace Smart.House.Data.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cameras",
                columns: table => new
                {
                    Identifier = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AmbientNotificationEnabled = table.Column<bool>(type: "bit", nullable: false),
                    FtpLogin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FtpMotionPath = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FtpPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotionDetectionEnabled = table.Column<bool>(type: "bit", nullable: false),
                    SoundNotificationEnabled = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cameras", x => x.Identifier);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cameras");
        }
    }
}
