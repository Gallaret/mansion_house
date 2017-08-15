using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Smart.House.EntityFramework.Migrations
{
    public partial class Harmonogram : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Cameras",
                table: "Cameras");

            migrationBuilder.RenameTable(
                name: "Cameras",
                newName: "Devices");

            migrationBuilder.AlterColumn<bool>(
                name: "MotionDetectionEnabled",
                table: "Devices",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool));

            migrationBuilder.AddColumn<string>(
                name: "Producent",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "device_type",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Devices",
                table: "Devices",
                column: "Identifier");

            migrationBuilder.CreateTable(
                name: "Harmonograms",
                columns: table => new
                {
                    Identifier = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Friday = table.Column<bool>(type: "bit", nullable: false),
                    From = table.Column<TimeSpan>(type: "time", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Monday = table.Column<bool>(type: "bit", nullable: false),
                    Saturday = table.Column<bool>(type: "bit", nullable: false),
                    Sunday = table.Column<bool>(type: "bit", nullable: false),
                    Thursday = table.Column<bool>(type: "bit", nullable: false),
                    To = table.Column<TimeSpan>(type: "time", nullable: false),
                    Tuesday = table.Column<bool>(type: "bit", nullable: false),
                    Wednesday = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Harmonograms", x => new { x.Identifier, x.Type });
                    table.ForeignKey(
                        name: "ForeignKey_Harmonogram_Device",
                        column: x => x.Identifier,
                        principalTable: "Devices",
                        principalColumn: "Identifier",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Harmonograms");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Devices",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "Producent",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "device_type",
                table: "Devices");

            migrationBuilder.RenameTable(
                name: "Devices",
                newName: "Cameras");

            migrationBuilder.AlterColumn<bool>(
                name: "MotionDetectionEnabled",
                table: "Cameras",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cameras",
                table: "Cameras",
                column: "Identifier");
        }
    }
}
