
import React from 'react';
import jsPDF from 'jspdf';
import { toast } from "sonner";

export const generateResumePDF = () => {
  // Initialize PDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });
  
  // Set background and fonts
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Header
  doc.setFontSize(24);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Sandeep Raj Saravanan", 105, 20, { align: "center" });
  
  // Contact Info
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.setFont("helvetica", "normal");
  doc.text("📞 +91 86083 76406 | 📧 sandeep02122005@gmail.com | 📍 Chennai, Tamil Nadu", 105, 30, { align: "center" });
  
  // Horizontal line
  doc.setDrawColor(100, 100, 200);
  doc.setLineWidth(0.5);
  doc.line(15, 35, 195, 35);
  
  // Profile Summary
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Profile Summary", 15, 45);
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "normal");
  const profileText = "Motivated and detail-oriented developer passionate about app and website development. Proficient in backend programming with a strong focus on creating robust and scalable solutions. Committed to continuous learning, collaboration, and delivering high-quality software. Eager to contribute to innovative projects that challenge skills and enhance user experiences.";
  const splitProfileText = doc.splitTextToSize(profileText, 180);
  doc.text(splitProfileText, 15, 52);
  
  // Education
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Education", 15, 70);
  
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("SRM University, Kattankulathur", 15, 77);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("B.Tech - Computer Science and Engineering (Core)", 15, 83);
  doc.text("2023 – 2027", 15, 89);
  
  // Skills
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Skills", 15, 100);
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "normal");
  doc.text("Programming Languages: C, C++, Java, Python", 15, 107);
  doc.text("Database: SQL, DBMS", 15, 113);
  doc.text("Platforms: Linux", 15, 119);
  doc.text("Concepts: Problem Solving, Object-Oriented Programming (OOP)", 15, 125);
  
  // Languages
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Languages", 15, 136);
  
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "normal");
  doc.text("English: Fluent", 15, 143);
  doc.text("Tamil: Fluent", 80, 143);
  doc.text("Hindi: Basic", 15, 149);
  doc.text("German: Basic", 80, 149);
  
  // Certifications
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Certifications", 15, 160);
  
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("RHCSA (Red Hat Certified System Administrator)", 15, 167);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Validity: April 2025 - April 2028", 15, 173);
  const rhcsaText = "Mastery of foundational Linux system administration skills, including RHEL system configurations and cloud-based practice environments.";
  doc.text(doc.splitTextToSize(rhcsaText, 180), 15, 179);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("DBMS Course – Master the Fundamentals and Advanced Concepts (Scaler)", 15, 188);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("April 2025", 15, 194);
  const dbmsText = "Real-world SQL queries, joins, subqueries, system design skills, and FAANG-level interview preparation.";
  doc.text(doc.splitTextToSize(dbmsText, 180), 15, 200);
  
  // Add second page
  doc.addPage();
  
  // Continue with Problem Solving certification
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("Problem Solving, C# (Basics), SQL (Basic to Advanced) (HackerRank)", 15, 20);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("April 2025", 15, 26);
  doc.text("Problem Solving: Data Structures, Algorithms, Optimization", 15, 32);
  doc.text("C# Basics: OOP principles, Control structures, Classes", 15, 38);
  doc.text("SQL: Advanced querying, joins, aggregation, window functions, CTEs.", 15, 44);
  
  // Publications
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Publications", 15, 55);
  
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("VoiSOS - Voice-Based SOS System (Published by Springer) – March 2025", 15, 62);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const voiSosText = "Developed a Flutter-based SOS system with voice-triggered activation, real-time GPS tracking, AI-based voice analysis to reduce false alarms, multilingual and offline support for accessibility.";
  doc.text(doc.splitTextToSize(voiSosText, 180), 15, 68);
  
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Analysis on Venous Ulcer and Tissue Classification (Accepted by IEEE) – Yet to be published", 15, 78);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const ulcerText = "Used CNN-based deep learning models for staging and analyzing venous ulcers using the CEAP classification to improve diagnosis and treatment accuracy.";
  doc.text(doc.splitTextToSize(ulcerText, 180), 15, 84);
  
  // Projects
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Projects", 15, 95);
  
  // Project 1
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("AI-Based Face Recognition System for Lab Security", 15, 102);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const p1Text = "Built a real-time AI face recognition system using OpenCV and CNNs for secure laboratory access control, eliminating manual identity verification.";
  doc.text(doc.splitTextToSize(p1Text, 180), 15, 108);
  
  // Project 2
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("HealthCare Management System (Java)", 15, 118);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const p2Text = "Designed and developed a Java-based system for managing patient data, appointments, and medical records with role-based access control for doctors, patients, and admins.";
  doc.text(doc.splitTextToSize(p2Text, 180), 15, 124);
  
  // Project 3
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Environment Management System (IoT)", 15, 134);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const p3Text = "Created a smart monitoring system using DHT11 and PIR sensors with an ESP8266 microcontroller for real-time tracking of temperature, humidity, and motion, integrated with cloud platforms.";
  doc.text(doc.splitTextToSize(p3Text, 180), 15, 140);
  
  // Project 4
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Event Management System", 15, 150);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const p4Text = "Developed a web interface for users to register, browse, book, and manage events efficiently, complete with relational database design and user/event management modules.";
  doc.text(doc.splitTextToSize(p4Text, 180), 15, 156);
  
  // Additional Certifications & Workshops
  doc.setFontSize(14);
  doc.setTextColor(50, 50, 140);
  doc.setFont("helvetica", "bold");
  doc.text("Additional Certifications & Workshops", 15, 170);
  
  // Workshop 1
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "bold");
  doc.text("ACE HACKS – 24-Hour Hackathon", 15, 177);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const w1Text = "Selected among the top 26 teams out of 300+ participants for designing a cost- and material-efficient pipeline routing solution with a functional frontend prototype.";
  doc.text(doc.splitTextToSize(w1Text, 180), 15, 183);
  
  // Workshop 2 - Fixed the string quotation issue here
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Capacity Building Workshop – \"Unleash Your Potential\"", 15, 193);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const w2Text = "Focused on self-discovery, entrepreneurial thinking, life mapping, SMART goal development, and vision board creation to enhance personal and professional growth.";
  doc.text(doc.splitTextToSize(w2Text, 180), 15, 199);
  
  // Workshop 3
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("IoRT Workshop (International Conference on IoT - ICIOT 2025)", 15, 209);
  
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const w3Text = "Gained hands-on experience with IoT-based intelligent robotic systems and IoT kits through practical sessions.";
  doc.text(doc.splitTextToSize(w3Text, 180), 15, 215);
  
  // Footer with page numbers
  // Fixed the getNumberOfPages error by using the appropriate API method
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} of ${totalPages}`, 105, 290, { align: 'center' });
  }
  
  // Save PDF
  try {
    doc.save("Sandeep_Raj_Saravanan_Resume.pdf");
    toast.success("Resume downloaded successfully");
    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    toast.error("Failed to download resume");
    return false;
  }
};

const ResumeDownloader: React.FC = () => {
  return null; // This component doesn't render anything
};

export default ResumeDownloader;
