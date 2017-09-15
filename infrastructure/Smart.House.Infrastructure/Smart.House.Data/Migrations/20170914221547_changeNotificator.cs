using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Smart.House.Data.Migrations
{
    public partial class changeNotificator : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LimitPerHour",
                table: "Devices");

            migrationBuilder.AddColumn<int>(
                name: "Limit",
                table: "Devices",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MobileProvider",
                table: "Devices",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Limit",
                table: "Devices");

            migrationBuilder.DropColumn(
                name: "MobileProvider",
                table: "Devices");

            migrationBuilder.AddColumn<int>(
                name: "LimitPerHour",
                table: "Devices",
                nullable: true);
        }
    }
}
