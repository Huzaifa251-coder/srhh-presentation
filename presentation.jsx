import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Wifi, Droplet, AlertTriangle, DollarSign, TrendingUp, Users, Heart, Phone, Pill, Activity } from 'lucide-react';

const TelemedicinePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Smart Rural Health Hub (SRHH)",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-gradient-to-br from-blue-50 to-purple-50 -m-12 p-12">
          <div className="relative">
            <Heart className="w-32 h-32 text-red-500 animate-pulse" />
            <Zap className="w-12 h-12 text-yellow-500 absolute -top-2 -right-2" />
          </div>
          <h1 className="text-6xl font-bold text-blue-900 text-center">Smart Rural Health Hub</h1>
          <p className="text-3xl text-gray-700 text-center font-semibold">Pakistan-Focused Solar-Powered Telemedicine System</p>
          <div className="mt-8 text-xl text-gray-600 space-y-2">
            <p className="text-center">BS Cybersecurity - Civic & Community Engagement</p>
            <p className="text-center font-semibold">Group Members: [Your Names]</p>
          </div>
        </div>
      )
    },
    
    // Slide 2: Project Overview
    {
      title: "Project Overview",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold mb-4 text-center">What is SRHH?</h2>
            <p className="text-xl leading-relaxed text-center">
              A Pakistan-focused solar-powered telemedicine and IoT healthcare system for remote rural villages.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl shadow-lg border-2 border-green-300">
              <div className="flex items-center mb-4">
                <Zap className="w-10 h-10 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Key Feature</h3>
              </div>
              <p className="text-lg text-gray-700">Provides instant medical access, remote consultations, IoT diagnostics, and secure digital records.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl shadow-lg border-2 border-blue-300">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Target Area</h3>
              </div>
              <p className="text-lg text-gray-700">Remote rural villages in Pakistan with no electricity grid access</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">Core Services</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center bg-white p-4 rounded-lg shadow">
                <div className="text-4xl mb-2">🩺</div>
                <p className="font-semibold text-gray-800">Instant Medical Access</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow">
                <div className="text-4xl mb-2">💻</div>
                <p className="font-semibold text-gray-800">Remote Consultations</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow">
                <div className="text-4xl mb-2">📊</div>
                <p className="font-semibold text-gray-800">IoT Diagnostics</p>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow">
                <div className="text-4xl mb-2">🔒</div>
                <p className="font-semibold text-gray-800">Secure Records</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Project Objectives
    {
      title: "Project Objectives",
      content: (
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Our 5 Core Objectives</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-2xl text-blue-900 mb-2">Provide Immediate Healthcare Access</h4>
                <p className="text-lg text-gray-700">Enable underserved villages to access medical care within minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg border-l-4 border-yellow-600">
              <div className="bg-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-2xl text-yellow-900 mb-2">Enable Solar-Powered Telemedicine</h4>
                <p className="text-lg text-gray-700">Operate completely off-grid without reliance on electricity infrastructure</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-2xl text-green-900 mb-2">Use IoT Devices for Accurate Diagnostics</h4>
                <p className="text-lg text-gray-700">Deploy smart medical devices for real-time health monitoring</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-2xl text-purple-900 mb-2">Ensure Secure Digital Health Records</h4>
                <p className="text-lg text-gray-700">Maintain encrypted, blockchain-backed patient medical history</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-lg border-l-4 border-red-600">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-2xl text-red-900 mb-2">Provide Emergency Connectivity and Alerts</h4>
                <p className="text-lg text-gray-700">Instant coordination with Rescue 1122 and nearest hospitals</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Main Components
    {
      title: "Main Components",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900">6 Core System Components</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-xl shadow-xl border-2 border-yellow-400">
              <div className="flex items-center mb-4">
                <Zap className="w-12 h-12 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-yellow-900">Solar-Powered Telemedicine Cabin</h3>
              </div>
              <p className="text-gray-700 text-lg">Off-grid consultation room with video equipment, powered entirely by solar panels and battery backup</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-xl border-2 border-green-400">
              <div className="flex items-center mb-4">
                <Activity className="w-12 h-12 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">IoT Health Diagnostic Devices</h3>
              </div>
              <p className="text-gray-700 text-lg">Smart BP monitors, pulse oximeters, ECG machines, glucometers - all connected and transmitting data</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-xl border-2 border-blue-400">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Local Health Operator</h3>
              </div>
              <p className="text-gray-700 text-lg">Trained paramedic or nurse providing first aid, vitals monitoring, and patient stabilization on-site</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-xl border-2 border-purple-400">
              <div className="flex items-center mb-4">
                <Wifi className="w-12 h-12 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-purple-900">Remote Doctor Network</h3>
              </div>
              <p className="text-gray-700 text-lg">City-based specialists available via telemedicine for diagnosis and prescriptions</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-xl border-2 border-pink-400">
              <div className="flex items-center mb-4">
                <Pill className="w-12 h-12 text-pink-600 mr-3" />
                <h3 className="text-2xl font-bold text-pink-900">E-Medicine Vending System</h3>
              </div>
              <p className="text-gray-700 text-lg">Automated medicine dispensing system with digital prescriptions and inventory tracking</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-xl border-2 border-red-400">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-12 h-12 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Emergency Alert and Transfer System</h3>
              </div>
              <p className="text-gray-700 text-lg">Direct integration with Rescue 1122 and GPS-enabled ambulance coordination</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Technology Integration
    {
      title: "Technology Integration",
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold text-center mb-2">Cybersecurity-First Approach</h2>
            <p className="text-center text-xl text-blue-100">Leveraging BS-CYS Expertise</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-10 h-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Cybersecurity</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>End-to-end encryption (AES-256)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>RBAC (Role-Based Access Control)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Cloud backup with disaster recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Blockchain-based health records</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 shadow-lg">
              <div className="flex items-center mb-4">
                <Wifi className="w-10 h-10 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Technology Stack</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>IoT sensors for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>4G or Starlink connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Python and Firebase backend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>React Native mobile app</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">System Architecture</h3>
            <div className="flex items-center justify-between bg-white p-6 rounded-lg">
              <div className="text-center flex-1">
                <div className="bg-blue-500 text-white rounded-lg p-4 mx-auto w-32 text-sm font-semibold">IoT Devices</div>
              </div>
              <div className="text-3xl text-blue-400">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-500 text-white rounded-lg p-4 mx-auto w-32 text-sm font-semibold">Local Hub</div>
              </div>
              <div className="text-3xl text-green-400">→</div>
              <div className="text-center flex-1">
                <div className="bg-purple-500 text-white rounded-lg p-4 mx-auto w-32 text-sm font-semibold">Cloud Server</div>
              </div>
              <div className="text-3xl text-purple-400">→</div>
              <div className="text-center flex-1">
                <div className="bg-red-500 text-white rounded-lg p-4 mx-auto w-32 text-sm font-semibold">Remote Doctor</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Why Not Build a Normal Hospital
    {
      title: "Why Not Build a Normal Hospital?",
      content: (
        <div className="space-y-8">
          <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-400 shadow-xl">
            <h2 className="text-4xl font-bold text-center text-red-900 mb-6">The Hospital Problem</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-5xl mb-3 text-center">👨‍⚕️</div>
                <h4 className="font-bold text-xl text-gray-800 mb-2 text-center">Doctor Shortage</h4>
                <p className="text-gray-700 text-center">Doctors do not stay in rural areas due to lack of facilities</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-5xl mb-3 text-center">⚡</div>
                <h4 className="font-bold text-xl text-gray-800 mb-2 text-center">Infrastructure Issues</h4>
                <p className="text-gray-700 text-center">Requires electricity, water, oxygen - unavailable in remote areas</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-5xl mb-3 text-center">💰</div>
                <h4 className="font-bold text-xl text-gray-800 mb-2 text-center">High Cost</h4>
                <p className="text-gray-700 text-center">Rural hospital costs more than 2 Crore PKR</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-5xl mb-3 text-center">👥</div>
                <h4 className="font-bold text-xl text-gray-800 mb-2 text-center">Staff Salaries</h4>
                <p className="text-gray-700 text-center">Annual staff costs more than 40 Lakh per year</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-4xl font-bold text-center mb-4">SRHH Solution</h2>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="text-5xl mb-2">80%</div>
                <p className="text-xl font-semibold">Cheaper</p>
              </div>
              <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="text-5xl mb-2">♻️</div>
                <p className="text-xl font-semibold">Sustainable</p>
              </div>
              <div className="text-center bg-white bg-opacity-20 p-4 rounded-lg">
                <div className="text-5xl mb-2">✨</div>
                <p className="text-xl font-semibold">Practical</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: 3-Layer Treatment Model
    {
      title: "Who Treats Patients Without On-Site Doctor?",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">3-Layer Treatment Model</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl shadow-xl border-l-8 border-green-600">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">1</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-green-900 mb-2">Local Health Operator</h3>
                  <p className="text-xl text-gray-700">Role: First aid, vitals monitoring, patient stabilization</p>
                  <p className="text-lg text-gray-600 mt-2">Trained paramedic or nurse available on-site 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl border-l-8 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">2</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">Remote Doctors</h3>
                  <p className="text-xl text-gray-700">Role: Diagnosis and prescriptions via telemedicine</p>
                  <p className="text-lg text-gray-600 mt-2">Network of specialists available through video consultation</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl shadow-xl border-l-8 border-red-600">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">3</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-red-900 mb-2">Emergency Transfer</h3>
                  <p className="text-xl text-gray-700">Role: Rescue 1122 alert for serious cases</p>
                  <p className="text-lg text-gray-600 mt-2">GPS-enabled ambulance coordination with nearest hospital</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-lg text-center">
            <p className="text-2xl font-semibold text-purple-900">
              This model ensures continuous care without requiring permanent on-site doctors
            </p>
          </div>
        </div>
      )
    },

    // Slide 8: How Remote Doctors Are Paid
    {
      title: "How Remote Doctors Are Paid",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">3 Revenue Streams</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl border-2 border-blue-400">
              <div className="flex items-center mb-4">
                <DollarSign className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-blue-900">1. Government and NGO Funding</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-blue-900">PPHI</p>
                  <p className="text-sm text-gray-600">Primary Healthcare</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-blue-900">AKU</p>
                  <p className="text-sm text-gray-600">Aga Khan University</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-blue-900">UNICEF</p>
                  <p className="text-sm text-gray-600">Healthcare Programs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-blue-900">Digital Pakistan</p>
                  <p className="text-sm text-gray-600">Gov Initiative</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl shadow-xl border-2 border-green-400">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-green-900">2. CSR Corporate Funding</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-green-900">Jazz</p>
                  <p className="text-sm text-gray-600">Telecom CSR</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-green-900">Zong</p>
                  <p className="text-sm text-gray-600">Digital Health</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-green-900">HBL</p>
                  <p className="text-sm text-gray-600">Banking CSR</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <p className="font-bold text-green-900">Engro</p>
                  <p className="text-sm text-gray-600">Rural Projects</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl border-2 border-purple-400">
              <div className="flex items-center mb-4">
                <Users className="w-12 h-12 text-purple-600 mr-4" />
                <h3 className="text-3xl font-bold text-purple-900">3. Small Patient Fee</h3>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-purple-900 mb-2">Rs. 50</p>
                  <p className="text-lg text-gray-700">Per Consultation</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-purple-900 mb-2">Rs. 200</p>
                  <p className="text-lg text-gray-700">Per Family Monthly</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 text-lg">
                FREE for Below Poverty Line families
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Financial Sustainability
    {
      title: "Financial Sustainability Model",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Monthly Cost and Income Breakdown</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl shadow-xl border-2 border-red-400">
              <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Monthly Costs</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Remote Doctor (shared)</span>
                    <span className="text-xl font-bold text-red-900">PKR 120,000</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Shared across 8-10 hubs</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Local Operator</span>
                    <span className="text-xl font-bold text-red-900">PKR 20,000</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Internet + Maintenance</span>
                    <span className="text-xl font-bold text-red-900">PKR 5,000</span>
                  </div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-900">Total Monthly Cost</span>
                    <span className="text-2xl font-bold text-red-900">PKR 145,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-xl border-2 border-green-400">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Monthly Income Sources</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">CSR + NGOs</span>
                    <span className="text-xl font-bold text-green-900">70%</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Government</span>
                    <span className="text-xl font-bold text-green-900">20%</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-700">Patient Fees</span>
                    <span className="text-xl font-bold text-green-900">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Key Financial Benefits</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">☀️</div>
                <p className="font-semibold text-gray-800">Zero Electricity Cost</p>
                <p className="text-sm text-gray-600">Solar-powered system</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">📉</div>
                <p className="font-semibold text-gray-800">Low Operational Cost</p>
                <p className="text-sm text-gray-600">Minimal staff required</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">♻️</div>
                <p className="font-semibold text-gray-800">Sustainable Model</p>
                <p className="text-sm text-gray-600">Multiple revenue streams</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Emergency Handling Workflow
    {
      title: "Emergency Handling Workflow",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-6">7-Step Emergency Process</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
              <div className="bg-blue-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-blue-900">Patient arrives at hub</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
              <div className="bg-green-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-green-900">Local operator stabilizes patient</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
              <div className="bg-purple-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-purple-900">IoT devices send vitals to system</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
              <div className="bg-yellow-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-yellow-900">Remote doctor connects via video consultation</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
              <div className="bg-orange-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-orange-900">Diagnosis provided and prescription issued</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">6</div>
              <div className="bg-red-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-red-900">If severe: Emergency Alert sent to Rescue 1122 and nearest hospital</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">7</div>
              <div className="bg-pink-50 p-4 rounded-lg flex-1 shadow">
                <p className="text-lg font-semibold text-pink-900">Patient transferred with GPS-tracked ambulance</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-xl shadow-xl">
            <p className="text-2xl font-bold text-center">Average Response Time: Under 5 Minutes</p>
          </div>
        </div>
      )
    },

    // Slide 11: Expected Impact
    {
      title: "Expected Impact",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Transforming Rural Healthcare</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-xl border-2 border-blue-400">
              <div className="flex items-center mb-4">
                <Heart className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Access to Healthcare</h3>
              </div>
              <p className="text-lg text-gray-700">Medical access within minutes instead of hours of travel</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-xl border-2 border-green-400">
              <div className="flex items-center mb-4">
                <DollarSign className="w-10 h-10 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Cost Savings</h3>
              </div>
              <p className="text-lg text-gray-700">Saves travel cost and time for rural families</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-xl border-2 border-purple-400">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-purple-900">Reduced Mortality</h3>
              </div>
              <p className="text-lg text-gray-700">Significantly reduces maternal and infant mortality rates</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-xl border-2 border-red-400">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-10 h-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Disaster Ready</h3>
              </div>
              <p className="text-lg text-gray-700">Works during floods or disasters with solar power</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-xl border-2 border-yellow-400">
              <div className="flex items-center mb-4">
                <Shield className="w-10 h-10 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-yellow-900">Trusted Records</h3>
              </div>
              <p className="text-lg text-gray-700">Secure digital medical history for every patient</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-xl border-2 border-pink-400">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-10 h-10 text-pink-600 mr-3" />
                <h3 className="text-2xl font-bold text-pink-900">Community Development</h3>
              </div>
              <p className="text-lg text-gray-700">Local employment and health awareness in villages</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-4">Long-Term Vision</h3>
            <p className="text-xl text-center">Deploy 100+ hubs across rural Pakistan, serving over 2 million people</p>
          </div>
        </div>
      )
    },

    // Slide 12: Sustainability Plan
    {
      title: "Sustainability Plan",
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Long-Term Sustainability</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-xl shadow-xl border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Zap className="w-10 h-10 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-yellow-900">Solar-Powered</h3>
              </div>
              <p className="text-lg text-gray-700">Zero electricity cost with solar panels and battery backup system</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-xl border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Users className="w-10 h-10 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Local Operators Trained</h3>
              </div>
              <p className="text-lg text-gray-700">Community members trained as health operators ensuring local ownership</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <DollarSign className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Annual Maintenance</h3>
              </div>
              <p className="text-lg text-gray-700">Funded by CSR and NGOs with long-term partnerships</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-xl border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-10 h-10 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-purple-900">Low-Cost Scalable</h3>
              </div>
              <p className="text-lg text-gray-700">Model can be replicated across Pakistan at minimal cost</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-4">Key Success Factors</h3>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-5xl mb-2">💪</div>
                <p className="text-xl font-semibold">Community Ownership</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🤝</div>
                <p className="text-xl font-semibold">Strong Partnerships</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">📈</div>
                <p className="text-xl font-semibold">Proven Impact</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Conclusion
    {
      title: "Conclusion",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="relative">
            <Heart className="w-24 h-24 text-red-500 animate-pulse mx-auto" />
          </div>
          
          <h2 className="text-5xl font-bold text-blue-900 text-center">A Realistic, Modern Solution</h2>
          
          <p className="text-2xl text-gray-700 text-center max-w-4xl leading-relaxed">
            The SRHH is a <span className="font-bold text-blue-600">realistic, modern, and sustainable</span> healthcare model for rural Pakistan.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl max-w-4xl">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-6">What Makes It Work</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow text-center">
                <div className="text-4xl mb-2">📡</div>
                <p className="font-semibold text-lg text-gray-800">Telemedicine</p>
                <p className="text-sm text-gray-600">Remote consultations</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow text-center">
                <div className="text-4xl mb-2">📊</div>
                <p className="font-semibold text-lg text-gray-800">IoT Integration</p>
                <p className="text-sm text-gray-600">Smart diagnostics</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow text-center">
                <div className="text-4xl mb-2">🚨</div>
                <p className="font-semibold text-lg text-gray-800">Emergency Systems</p>
                <p className="text-sm text-gray-600">1122 coordination</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow text-center">
                <div className="text-4xl mb-2">🔒</div>
                <p className="font-semibold text-lg text-gray-800">Cybersecurity</p>
                <p className="text-sm text-gray-600">Protected data</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-xl max-w-3xl">
            <p className="text-2xl font-bold text-center">
              Filling the gap where traditional hospitals cannot function
            </p>
          </div>
        </div>
      )
    },

    // Slide 14: Thank You
    {
      title: "Thank You",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-gradient-to-br from-blue-50 to-purple-50 -m-12 p-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🙏</div>
            <h1 className="text-6xl font-bold text-blue-900 mb-4">Thank You!</h1>
            <p className="text-3xl text-gray-700">Questions and Discussion</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-3 text-center text-xl text-gray-700">
              <p>📧 Email: [your-group-email@example.com]</p>
              <p>📱 Phone: [contact-number]</p>
              <p>🏛️ BS Cybersecurity - Section [A/B]</p>
            </div>
          </div>

          <div className="text-center max-w-3xl">
            <p className="text-2xl text-gray-700 italic font-semibold">
              Making healthcare accessible to every Pakistani, regardless of location
            </p>
          </div>

          <div className="flex space-x-8">
            <Heart className="w-16 h-16 text-red-500 animate-pulse" />
            <Zap className="w-16 h-16 text-yellow-500" />
            <Shield className="w-16 h-16 text-green-500" />
            <Users className="w-16 h-16 text-blue-500" />
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-1 bg-white m-8 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-1 p-12 overflow-y-auto">
          {slides[currentSlide].content}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center">
          <div className="text-sm font-semibold">
            {slides[currentSlide].title}
          </div>
          <div className="text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>

      <div className="px-8 pb-8 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TelemedicinePresentation;