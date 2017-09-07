﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Smart.House.Data.Model;

namespace Smart.House.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20170813002541_initialMigration")]
    partial class initialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-rtm-26452")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Smart.House.Domain.Entities.Camera.Camera", b =>
                {
                    b.Property<string>("Identifier")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AmbientNotificationEnabled");

                    b.Property<string>("FtpLogin");

                    b.Property<string>("FtpMotionPath");

                    b.Property<string>("FtpPassword");

                    b.Property<bool>("MotionDetectionEnabled");

                    b.Property<bool>("SoundNotificationEnabled");

                    b.HasKey("Identifier");

                    b.ToTable("Cameras");
                });
#pragma warning restore 612, 618
        }
    }
}
