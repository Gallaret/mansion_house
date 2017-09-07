using Microsoft.EntityFrameworkCore.Migrations;

namespace Smart.House.Data.Migrations
{
    public partial class dbrefactor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EmailNotificationEnabled",
                table: "Devices",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "SmsNotificationEnabled",
                table: "Devices",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailNotificationEnabled",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "SmsNotificationEnabled",
                table: "Devices");
        }
    }
}
