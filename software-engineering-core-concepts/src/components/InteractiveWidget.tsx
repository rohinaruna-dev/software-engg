/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, Shield, AlertTriangle, CheckCircle2, XCircle, Database, 
  Code, Settings, RefreshCw, Play, ArrowRight, GitBranch, 
  FileText, Users, Scale, MessageSquare, Trash2, CheckCircle
} from "lucide-react";

interface InteractiveWidgetProps {
  moduleId: string;
  onComplete: () => void;
}

export default function InteractiveWidget({ moduleId, onComplete }: InteractiveWidgetProps) {
  // Common states
  const [gameState, setGameState] = useState<any>({});
  const [score, setScore] = useState<number>(0);
  const [complete, setComplete] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    // Reset state on module switch
    setGameState({});
    setScore(0);
    setComplete(false);
    setFeedback("");
  }, [moduleId]);

  const triggerCompletion = (finalScore: number = score) => {
    setComplete(true);
    onComplete();
  };

  // --- 1. Why Software Engineering Matters: Hacker vs. Engineer ---
  if (moduleId === "importance") {
    const defaultImportance = {
      round: 1,
      users: 10,
      techDebt: 0,
      systemHealth: 100,
      history: [] as string[]
    };
    const state = { ...defaultImportance, ...gameState };

    const handleChoice = (type: "hack" | "engineer") => {
      let currentDebt = state.techDebt;
      let currentHealth = state.systemHealth;
      let usersMult = state.round === 1 ? 100 : state.round === 2 ? 1000 : 10000;
      let nextUsers = state.users * usersMult;
      let log = "";

      if (type === "hack") {
        currentDebt += 30;
        currentHealth -= 15;
        log = `⚠️ Round ${state.round}: Applied a quick duplicate-code template! Pushed in 5 minutes. Technical debt skyrocketed (+30%).`;
      } else {
        currentDebt -= 10;
        currentHealth += 10;
        if (currentDebt < 0) currentDebt = 0;
        log = `🛠️ Round ${state.round}: Configured custom clean modules and wrote unit tests. Refactored structural code (-10% Debt, +10% Health).`;
      }

      // Check degradation under scaling user loads
      if (currentDebt > 40) {
        let fine = Math.round(currentDebt * 0.8);
        currentHealth -= fine;
        log += ` 💥 scale collapse: Massive user surge detected (${nextUsers.toLocaleString()} active inquiries). Stale database lock and un-indexed tables caused a system slowdown! (Health dropped by ${fine}% due to Tech Debt penalty).`;
      } else {
        log += ` 📈 Surge handled: Systems processed ${nextUsers.toLocaleString()} requests flawlessly! High code-modularization kept the CPU cooler.`;
      }

      if (currentHealth < 0) currentHealth = 0;
      if (currentHealth > 100) currentHealth = 100;

      const nextRound = state.round + 1;
      const updatedHistory = [log, ...state.history];

      if (nextRound > 3) {
        setGameState({
          ...state,
          round: nextRound,
          users: nextUsers,
          techDebt: currentDebt,
          systemHealth: currentHealth,
          history: updatedHistory
        });
        if (currentHealth >= 50) {
          setFeedback(`System stable! You successfully steered your student project into a production-grade scalable application. Average Health: ${currentHealth}%!`);
          triggerCompletion();
        } else {
          setFeedback(`System crash! Your technical debt was too high, causing a blackout under load. Real engineers design for scalability, not just hotfixes!`);
        }
      } else {
        setGameState({
          round: nextRound,
          users: nextUsers,
          techDebt: currentDebt,
          systemHealth: currentHealth,
          history: updatedHistory
        });
      }
    };

    const resetGame = () => {
      setGameState(defaultImportance);
      setFeedback("");
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="importance_game">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2">
            <Zap className="h-5 w-5 fill-current" /> Code vs. Engineering Simulator
          </h3>
          <span className="font-mono text-xs bg-slate-800 px-3 py-1 rounded text-slate-300">
            {state.round <= 3 ? `Traffic Surge Phase: ${state.round} / 3` : "Simulation Complete"}
          </span>
        </div>

        {state.round <= 3 ? (
          <div>
            <p className="text-slate-300 text-sm mb-6">
              You are hosting a campus ticket sales utility. Your traffic is about to surge. Choose how to deploy the next update!
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-center">
                <div className="text-xs text-slate-400 font-mono">ACTIVE TRAFFIC</div>
                <div className="font-sans font-bold text-lg text-emerald-400">{state.users.toLocaleString()} users</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-705 text-center">
                <div className="text-xs text-slate-400 font-mono">TECHNICAL DEBT</div>
                <div className="font-sans font-bold text-lg text-red-400">{state.techDebt}%</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-705 text-center">
                <div className="text-xs text-slate-400 font-mono">SYSTEM HEALTH</div>
                <div className="font-sans font-bold text-lg text-amber-500">{state.systemHealth}%</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button 
                id="importance_hack_btn"
                onClick={() => handleChoice("hack")}
                className="p-4 bg-red-950/40 border border-red-800/60 rounded-xl text-left hover:bg-red-950/70 transition-all duration-200 group"
              >
                <div className="font-sans font-semibold text-red-400 flex items-center justify-between">
                  <span>🚀 Quick Hack-it-Together Fix</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Copy-paste static configurations, ignore error boundary fallbacks, skip tests, get it up immediately.
                </p>
                <div className="text-[10px] text-red-300 mt-2 font-mono font-semibold">+Fast Launchtime | +Heavy Tech Debt | -Reliability</div>
              </button>

              <button 
                id="importance_eng_btn"
                onClick={() => handleChoice("engineer")}
                className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-left hover:bg-emerald-950/70 transition-all duration-200 group"
              >
                <div className="font-sans font-semibold text-emerald-400 flex items-center justify-between">
                  <span>🛠️ Systematic Engineered Strategy</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Maintain clean encapsulation, implement indexing on DB key lookups, map unit tests to build triggers.
                </p>
                <div className="text-[10px] text-emerald-300 mt-2 font-mono font-semibold">-Slightly Slower | -Reduces Tech Debt | +System Scalability</div>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center mb-6">
            <div className="flex justify-center mb-3">
              {state.systemHealth >= 50 ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              ) : (
                <XCircle className="h-12 w-12 text-red-400" />
              )}
            </div>
            <h4 className="font-bold text-lg mb-2 text-slate-100">
              {state.systemHealth >= 50 ? "Simulation Passed!" : "Simulation Failed!"}
            </h4>
            <p className="text-sm text-slate-300 mb-4">{feedback}</p>
            <div className="flex justify-center gap-3">
              <button 
                onClick={resetGame} 
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" /> Retry Game
              </button>
              {state.systemHealth >= 50 && (
                <span className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-semibold text-white">
                  ✓ Concept Mastered
                </span>
              )}
            </div>
          </div>
        )}

        <div className="mt-4">
          <div className="text-xs font-mono text-slate-400 mb-2">RUNNING SYSTEMS EMULATOR LOG:</div>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-[11px] text-slate-300 h-28 overflow-y-auto space-y-1.5 scrollbar-thin">
            {state.history.length === 0 ? (
              <span className="text-slate-500 italic">Waiting for initial deployments...</span>
            ) : (
              state.history.map((log: string, idx: number) => (
                <div key={idx} className="border-b border-white/[0.05] pb-1 last:border-0">{log}</div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  // --- 2. Problem Solving Activity: Constraint Balancing Simulator ---
  if (moduleId === "problem_solving") {
    const defaultProblemState = {
      budget: 1000,
      timeline: 14, // 14 days
      devStack: "unselected",
      servers: "unselected",
      qaLevel: "unselected",
      submitted: false
    };
    const state = { ...defaultProblemState, ...gameState };

    const calculateResult = () => {
      // Dev stack:
      // - Node/Express Custom: cost -200, quality +3, stress +2, days +4
      // - No-Code DragDrop: cost -600, quality +1, stress +0, days +2
      // - Enterprise Java Monolith: cost -500, quality +4, stress +4, days +8
      // Servers:
      // - Shared Server ($10/mo): cost -50, capacity 200, resilience 1
      // - Auto-scaling Kubernetes ($600/mo): cost -600, capacity 10000, resilience 5
      // - VPS Cluster ($300/mo): cost -300, capacity 2000, resilience 3
      // QA Level:
      // - None: cost 0, testCoverage: 0, bugFrequency: High
      // - Custom Unit Testing: cost -150, testCoverage: 60, bugFrequency: Low
      // - Complete QA Engineer audits: cost -400, testCoverage: 95, bugFrequency: Minimal

      let totalCost = 0;
      let totalDays = 0;
      let resilience = 0;
      let testCoverage = 0;
      let error = "";

      if (state.devStack === "node") { totalCost += 200; totalDays += 4; }
      else if (state.devStack === "nocode") { totalCost += 600; totalDays += 2; }
      else if (state.devStack === "enterprise") { totalCost += 500; totalDays += 8; }

      if (state.servers === "shared") { totalCost += 50; resilience = 1; }
      else if (state.servers === "k8s") { totalCost += 600; resilience = 5; }
      else if (state.servers === "vps") { totalCost += 300; resilience = 3; }

      if (state.qaLevel === "none") { totalCost += 0; testCoverage = 0; }
      else if (state.qaLevel === "unit") { totalCost += 150; testCoverage = 60; }
      else if (state.qaLevel === "full") { totalCost += 400; testCoverage = 95; }

      const budgetRemaining = 1000 - totalCost;
      const daysUsed = totalDays;

      if (budgetRemaining < 0) {
        error = `❌ Budget Exceeded! You spent $${totalCost} but only had $1,000. Under real SE constraint analysis, over-spending breaks contracts!`;
      } else if (daysUsed > state.timeline) {
        error = `❌ Timeline Blew Up! Your design required ${daysUsed} days, which exceeded the rigid 14-day client launch deadline.`;
      } else if (resilience < 3) {
        error = `💥 Severe Scale Failure! Your system architecture passed the time and budget bounds, but using low-tier servers crashed the system instantly under concurrent client enrollment load.`;
      } else if (testCoverage < 50) {
        error = `🐞 Critical Bug Disaster! Although you stayed inside financial limits, skipping software testing resulted in major memory leaks and corrupted accounts in production.`;
      }

      setGameState({
        ...state,
        submitted: true,
        testStats: {
          cost: totalCost,
          days: daysUsed,
          resilience,
          testCoverage,
          error,
          passed: error === ""
        }
      });

      if (error === "") {
        setFeedback(`Success! Your architecture balances budget, deadline limits, scalability, and test quality! Excellent engineering compromise!`);
        triggerCompletion();
      }
    };

    const resetGame = () => {
      setGameState(defaultProblemState);
      setFeedback("");
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="problem_solving_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <Scale className="h-5 w-5 fill-current" /> The Constraint-Space Optimizer
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          OBJECTIVE: Deliver a scale-resilient portal within 14 Days, under a $1,000 strict budget, with minimal bugs.
        </p>

        {!state.submitted ? (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 font-mono mb-2">1. SELECT APPLICATION STRUCTURE (Tech Stack):</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => setGameState({ ...state, devStack: "nocode" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.devStack === "nocode" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Drag-and-Drop SaaS Template</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $600 | Code Days: 2</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, devStack: "node" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.devStack === "node" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Node.js / Express Custom Server</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $200 | Code Days: 4</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, devStack: "enterprise" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.devStack === "enterprise" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Enterprise Java Monolith</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $500 | Code Days: 8</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 font-mono mb-2">2. CHOOSE CLOUD HOSTING ARCHITECTURE:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => setGameState({ ...state, servers: "shared" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.servers === "shared" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Standard Shared Hosting</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $50 | Low Capacity</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, servers: "vps" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.servers === "vps" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">VPS Cluster Nodes</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $300 | Medium Resilience</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, servers: "k8s" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.servers === "k8s" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Auto-scaling Kubernetes</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $600 | Infinite Capacity</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 font-mono mb-2">3. QUALITY ASSURANCE / TESTING PIPELINE:</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  onClick={() => setGameState({ ...state, qaLevel: "none" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.qaLevel === "none" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Direct Deployment (No testing)</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $0 | Bug Rate: Hazardous</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, qaLevel: "unit" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.qaLevel === "unit" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Wrote Jest Unit Tests</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $150 | 60% Coverage</div>
                </button>
                <button 
                  onClick={() => setGameState({ ...state, qaLevel: "full" })}
                  className={`p-3 border text-left rounded-lg text-xs transition duration-150 ${state.qaLevel === "full" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                >
                  <div className="font-semibold">Continuous Integration + QA Audits</div>
                  <div className="mt-1 font-mono text-[10px]">Cost: $400 | 95% Coverage</div>
                </button>
              </div>
            </div>

            <button 
              id="problem_solve_submit"
              disabled={state.devStack === "unselected" || state.servers === "unselected" || state.qaLevel === "unselected"}
              onClick={calculateResult}
              className="w-full mt-6 py-3 rounded-lg text-sm bg-amber-500 hover:bg-amber-400 text-black font-extrabold flex items-center justify-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Analyze Constraints and Simulate Server Launch <Play className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center space-y-4">
            <div className="flex justify-center">
              {state.testStats.passed ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400 animate-bounce" />
              ) : (
                <XCircle className="h-12 w-12 text-red-500" />
              )}
            </div>

            <div className="text-left bg-black/40 p-4 rounded-lg font-mono text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Total Budget Spent:</span>
                <span className={state.testStats.cost > 1000 ? "text-red-400" : "text-emerald-400"}>${state.testStats.cost} / $1,000</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Timeline Coding Days:</span>
                <span className={state.testStats.days > 14 ? "text-red-400" : "text-emerald-400"}>{state.testStats.days} / 14 Days</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>Server Scaling Capacity:</span>
                <span className={state.testStats.resilience >= 3 ? "text-emerald-400" : "text-red-400"}>
                  {state.testStats.resilience === 1 ? "200 (Weak)" : state.testStats.resilience === 3 ? "2,000 (Fair)" : "10,000 (Supreme)"}
                </span>
              </div>
              <div className="flex justify-between pb-1">
                <span>Code Safety Coverage:</span>
                <span className={state.testStats.testCoverage >= 50 ? "text-emerald-400" : "text-red-400"}>{state.testStats.testCoverage}%</span>
              </div>
            </div>

            {state.testStats.passed ? (
              <p className="text-sm text-slate-200 bg-emerald-950/20 border border-emerald-800/40 p-3 rounded-lg max-w-md mx-auto">
                {feedback}
              </p>
            ) : (
              <p className="text-sm text-red-400 bg-red-950/20 border border-red-800/40 p-3 rounded-lg max-w-md mx-auto">
                {state.testStats.error}
              </p>
            )}

            <div className="flex justify-center gap-3">
              <button 
                onClick={resetGame} 
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" /> Reconfigure Architecture
              </button>
              {state.testStats.passed && (
                <span className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-semibold text-white">
                  ✓ Requirement Met
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 3. Modeling Activity: Object Relationships Connector Game ---
  if (moduleId === "modelling") {
    const relationships = [
      { type: "Composition", desc: "A strong ownership relationship with matching lifetimes; if the parent is destroyed, objects inside it vanish instantly." },
      { type: "Aggregation", desc: "A weak containing relationship where a container references child assets, but those assets have completely independent lifespans." },
      { type: "Inheritance", desc: "An 'Is-A' relationship hierarchy where a specialized child class automatically gains variables and structures from a parent class." },
      { type: "Association", desc: "A general peer-to-peer connection where two distinct classes collaborate to trigger methods, but neither controls the lifetime of another." }
    ];

    const targetScenarios = [
      { id: "s1", title: "College School & Classrooms", body: "If a School class is deleted, all nested Classroom instances inside it are instantly purged from the database.", correct: "Composition" },
      { id: "s2", title: "Smart Locker & Deliveries", body: "The Locker contains parcels. If we scrap the Locker structure entirely, the parcel items still exist as independent entities.", correct: "Aggregation" },
      { id: "s3", title: "Character & Mage specialization", body: "The game character has generalized health stats. Mage extends this character, gaining health parameters plus a new mana-bar.", correct: "Inheritance" },
      { id: "s4", title: "Client & Project Consultant", body: "An active customer schedules a technical meeting with an freelancer. Neither class controls the object lifecycle of the other.", correct: "Association" }
    ];

    const currentSelectionScenario = gameState.selectionScenario || "";
    const activeMatches = gameState.matches || {}; // scenarioId -> relationshipType

    const handleMatch = (scId: string, type: string) => {
      const updatedMatches = { ...activeMatches, [scId]: type };
      
      // Check if finished
      if (Object.keys(updatedMatches).length === 4) {
        let correctCount = 0;
        targetScenarios.forEach((sc) => {
          if (updatedMatches[sc.id] === sc.correct) correctCount += 1;
        });

        if (correctCount === 4) {
          setScore(4);
          setFeedback("Perfect! You matched all UML relationships accurately. Your understanding of Structural design patterns is ready for complex software engineering projects.");
          triggerCompletion(4);
        } else {
          setScore(correctCount);
          setFeedback(`You matched ${correctCount} / 4 correctly. Read the UML diagramming relationship definitions and retry!`);
        }
      }

      setGameState({
        ...gameState,
        matches: updatedMatches,
        selectionScenario: ""
      });
    };

    const resetGame = () => {
      setGameState({});
      setScore(0);
      setFeedback("");
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="modelling_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <GitBranch className="h-5 w-5" /> UML Relationship Blueprint Solver
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Connect the real-world system description to the correct UML relationship model. Complete all 4 matches!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-400 font-mono">SCENARIOS:</div>
            {targetScenarios.map((sc) => {
              const currentMatch = activeMatches[sc.id];
              const isCorrectAtEnd = score === 4 || currentMatch === sc.correct;
              const hasMatchAndChecking = score > 0 && score < 4;

              return (
                <div key={sc.id} className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60 transition">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-sans font-bold text-xs text-amber-300">{sc.title}</span>
                    {currentMatch && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-black uppercase ${
                        score === 4 || hasMatchAndChecking ? (currentMatch === sc.correct ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400") : "bg-slate-700 text-slate-300"
                      }`}>
                        Matched: {currentMatch}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs mt-1">{sc.body}</p>

                  {!currentMatch && (
                    <div className="flex gap-1.5 mt-3 flex-wrap">
                      {relationships.map((rel) => (
                        <button
                          key={rel.type}
                          onClick={() => handleMatch(sc.id, rel.type)}
                          className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-[10px] text-white transition"
                        >
                          + {rel.type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-400 font-mono">UML BLUEPRINT CHEAT CARD:</div>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3 text-xs md:text-sm">
              {relationships.map((rel) => (
                <div key={rel.type} className="border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                  <div className="font-semibold text-amber-400 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span> {rel.type}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{rel.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {feedback && (
          <div className={`p-4 rounded-xl text-center mb-6 text-sm ${score === 4 ? "bg-emerald-950/30 border border-emerald-800 text-emerald-300" : "bg-red-950/30 border border-red-800 text-red-300"}`}>
            <p className="mb-2 font-semibold flex justify-center items-center gap-1.5">
              {score === 4 ? <CheckCircle2 className="h-5 w-5 fill-current" /> : <AlertTriangle className="h-5 w-5 fill-current" />} {score === 4 ? "Perfect Match!" : "Matches Audited"}
            </p>
            <p className="text-xs">{feedback}</p>
            {score < 4 && (
              <button onClick={resetGame} className="mt-3 px-3 py-1 bg-red-900/60 rounded text-xs text-white">Reset & Try Again</button>
            )}
          </div>
        )}
      </div>
    );
  }

  // --- 4. Knowledge Acquisition Activity: Interview Simulator ---
  if (moduleId === "knowledge_acquisition") {
    const questionsAndProgress = [
      {
        step: 1,
        question: "Bob says: 'I want an AI-backed drone delivery module so my local burger shop stays cool.' How do you ask Bob for clarification?",
        choices: [
          { text: "Option A: 'Okay Bob, which neural network optimizer do you prefer? Adam or SGD?'", rating: 0, textFeedback: "Bob gets extremely confused. Pro tip: Don't throw computer science jargon at a non-technical small business entrepreneur." },
          { text: "Option B: 'What specific operational bottleneck are you experiencing with your local driver layout?'", rating: 4, textFeedback: "Excellent. Bob says: 'Well, campus delivery takes 35 minutes because drivers get lost in dorm courtyards, so the burgers get super cold and customer complaints skyrocket.'" },
          { text: "Option C: 'Drones are highly dangerous inside cities. How about a standard GPS tracking integration?'", rating: 2, textFeedback: "You solved a physical limit on your own, but didn't actually acquire the core domain bottleneck of cold burgers." }
        ]
      },
      {
        step: 2,
        question: "Excellent, you know cold burger delivery to campus is the core bottleneck. What's the next step to extract constraints?",
        choices: [
          { text: "Option A: 'What is your food quality-control deadline path, and how far is the college from your kitchen?'", rating: 4, textFeedback: "Bob responds: 'Burgers stay safe and hot for maximum 12 minutes. The dorm quadrant is only 1.2 miles away. We need delivery under 10 minutes, with thermal bag confirmation.'" },
          { text: "Option B: 'Let's write a React Native interface inside an App Store deployment.'", rating: 1, textFeedback: "You are deciding structural solutions before understanding the delivery distance limit and hot food parameters!" },
          { text: "Option C: 'We'll purchase a fast delivery truck with premium heat preservation.'", rating: 0, textFeedback: "You are attempting mechanical logistics instead of engineering a software communication scheduling application." }
        ]
      },
      {
        step: 3,
        question: "Perfect! Now how do you formalize Bob's requirement into an explicit software metric?",
        choices: [
          { text: "Option A: 'The app must notify users when the driver leaves the kitchen structure.'", rating: 2, textFeedback: "Informative, but doesn't guarantee the 10-minute maximum freshiness constraint." },
          { text: "Option B: 'Ensure delivery execution in under 10 minutes with end-to-end GPS routing, triggering thermal alarm if delayed.'", rating: 4, textFeedback: "Superb. This translates 'keep burgers hot' into an explicit, verifiable, and testable engineering constraint!" },
          { text: "Option C: 'Code a fast UI that users enjoy.'", rating: 1, textFeedback: "'Fast' is a fluffy qualification, not an engineering specifications audit." }
        ]
      }
    ];

    const currentStep = gameState.step || 1;
    const currentQuestionObj = questionsAndProgress[currentStep - 1];
    const totalGatheredQuality = gameState.qualityScore || 0;
    const isCompleted = currentStep > 3;

    const handleChoiceClick = (choice: any) => {
      const nextStep = currentStep + 1;
      const updatedScore = totalGatheredQuality + choice.rating;

      setGameState({
        step: nextStep,
        qualityScore: updatedScore,
        lastFeedback: choice.textFeedback
      });

      if (nextStep > 3) {
        if (updatedScore >= 10) {
          setFeedback(`System Requirements Document Complete! Excellent job as a Requirements Analyst. You filtered out Bob's hype ('AI drone delivery') and acquired the actual, verifiable constraint: 10-Minute thermal GPS delivery loops. Total Analyst Score: ${updatedScore}/12.`);
          triggerCompletion(updatedScore);
        } else {
          setFeedback(`Interview and Requirements finalized. However, your gathered requirements are too vague. Real engineers acquire precise metric constraints, not superficial features. Reset and try to ask better analytical questions. Total Analyst Score: ${updatedScore}/12.`);
        }
      }
    };

    const resetGame = () => {
      setGameState({});
      setFeedback("");
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="knowledge_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5" /> Requirements Interrogation Sandbox
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          CLIENT INTERVIEW PROFILE: Bob (Burger Shop Owner). Discover the true requirements by asking the right professional engineering questions.
        </p>

        {!isCompleted ? (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-36 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider">Bob's Query Phase {currentStep} of 3</span>
                <p className="text-xs text-slate-300 mt-2 italic font-sans">
                  {currentQuestionObj.question}
                </p>
              </div>

              {gameState.lastFeedback && (
                <div className="mt-4 p-2 bg-slate-900/80 border border-slate-800 rounded font-mono text-[11px] text-slate-300">
                  <span className="text-amber-400 font-bold uppercase">Feedback:</span> {gameState.lastFeedback}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold">CHOOSE YOUR QUESTIONING TECHNIQUE:</span>
              {currentQuestionObj.choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoiceClick(choice)}
                  className="w-full p-3 bg-slate-850/50 border border-slate-800 hover:border-slate-650 rounded-xl text-left hover:bg-slate-800 text-xs text-slate-200 transition duration-150 flex items-start gap-2 group"
                >
                  <span className="font-bold text-amber-500">{String.fromCharCode(65 + idx)})</span>
                  <div className="flex-1">
                    <div>{choice.text}</div>
                  </div>
                  <ArrowRight className="h-3 w-3 mt-0.5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center space-y-4">
            <div className="flex justify-center">
              {totalGatheredQuality >= 10 ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400 animate-bounce" />
              ) : (
                <XCircle className="h-12 w-12 text-red-400" />
              )}
            </div>

            <h4 className="font-bold text-base text-slate-100">
              {totalGatheredQuality >= 10 ? "Requirements Gathered Successfully!" : "Requirements Gathering Flawed!"}
            </h4>

            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">{feedback}</p>

            <div className="flex justify-center gap-3 mt-4">
              <button 
                onClick={resetGame} 
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer text-white"
              >
                <RefreshCw className="h-3 w-3" /> Interview Again
              </button>
              {totalGatheredQuality >= 10 && (
                <span className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-semibold text-white">
                  ✓ SRS Document Generated
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 5. Rationale-Driven Activity: ADR Tradeoff Matrix ---
  if (moduleId === "rationale_driven") {
    // Choices
    const primaryDatabase = gameState.db || "unselected";
    const transportProtocol = gameState.protocol || "unselected";

    // Calculate metrics
    let scalability = 50;
    let transactions = 50;
    let complexity = 50;
    let speed = 50;

    if (primaryDatabase === "sql") {
      transactions += 40;
      scalability -= 10;
      complexity += 10;
    } else if (primaryDatabase === "nosql") {
      scalability += 40;
      transactions -= 20;
      speed += 15;
    }

    if (transportProtocol === "ws") {
      speed += 30;
      scalability += 10;
      complexity += 35;
    } else if (transportProtocol === "polling") {
      speed -= 20;
      complexity -= 20;
    }

    const isSystemComplete = primaryDatabase !== "unselected" && transportProtocol !== "unselected";

    const retrieveADRText = () => {
      let doc = `ADR-0012: Core Messaging Architecture\n\n`;
      doc += `STATUS: ACCEPTED\n`;
      doc += `CONTEXT: Real-time discussion threads must scale past 10,000 concurrent channels while protecting account balances.\n\n`;
      doc += `DECISIONS:\n`;
      doc += `- Database: ${primaryDatabase === "sql" ? "PostgreSQL Relational Storage (ACID compliance)" : "MongoDB Schema-free Document Store (horizontal scaling)"}\n`;
      doc += `- Transport Interface: ${transportProtocol === "ws" ? "WebSockets (End-to-End persistent TCP channel)" : "HTTP Long-Polling (Continuous sequential HTTP loops)"}\n\n`;
      doc += `CONSEQUENCES & TRADE-OFFS:\n`;
      if (primaryDatabase === "sql" && transportProtocol === "ws") {
        doc += `* High structural integrity with ultra-fast latency. However, server memory complexity is extreme because matching persistent TCP connections against rigid SQL transaction locks requires custom pooling mechanisms.`;
      } else if (primaryDatabase === "nosql" && transportProtocol === "ws") {
        doc += `* Outstanding global scale and immediate typing indications. The trade-off is eventual consistency: users might see message delivery logs slightly out of order if cloud regions have sync delays.`;
      } else {
        doc += `* Simpler development curves but heavy request overhead. The HTTP request headers will consume up to 40% of our network bandwidth under load, resulting in slower dynamic layouts.`;
      }
      return doc;
    };

    const handleConfirmADR = () => {
      setGameState({
        ...gameState,
        confirmed: true
      });
      triggerCompletion();
    };

    const resetGame = () => {
      setGameState({});
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="rationale_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <Database className="h-5 w-5" /> Architecture Decision Record (ADR) Workshop
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Make technical design decisions. Witness real-time compound trade-offs, then audit and approve your ADR!
        </p>

        {!gameState.confirmed ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 font-mono mb-2">A. PRIMARY DATABASE STORE:</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setGameState({ ...gameState, db: "sql" })}
                    className={`flex-1 p-3 border text-left rounded-lg text-xs transition ${primaryDatabase === "sql" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                  >
                    <div className="font-semibold">Relational Database (SQL)</div>
                    <p className="text-[10px] text-slate-400 mt-1">ACID transactions, rigid schemas.</p>
                  </button>
                  <button 
                    onClick={() => setGameState({ ...gameState, db: "nosql" })}
                    className={`flex-1 p-3 border text-left rounded-lg text-xs transition ${primaryDatabase === "nosql" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                  >
                    <div className="font-semibold">Non-Relational (NoSQL)</div>
                    <p className="text-[10px] text-slate-400 mt-1">Horizontal scaling, eventual consistency.</p>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 font-mono mb-2">B. REAL-TIME TRANSPORT LAYER:</label>
                <div className="flex gap-2">
                  <button 
                    id="ws_btn"
                    onClick={() => setGameState({ ...gameState, protocol: "ws" })}
                    className={`flex-1 p-3 border text-left rounded-lg text-xs transition ${transportProtocol === "ws" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                  >
                    <div className="font-semibold">WebSockets Protocol</div>
                    <p className="text-[10px] text-slate-400 mt-1">Persistent TCP channel, tiny latency.</p>
                  </button>
                  <button 
                    id="polling_btn"
                    onClick={() => setGameState({ ...gameState, protocol: "polling" })}
                    className={`flex-1 p-3 border text-left rounded-lg text-xs transition ${transportProtocol === "polling" ? "border-amber-400 bg-amber-500/10 text-amber-300" : "border-slate-800 bg-slate-800/40 text-slate-400"}`}
                  >
                    <div className="font-semibold">HTTP Long-Polling</div>
                    <p className="text-[10px] text-slate-400 mt-1">Classic request-response, high metadata loads.</p>
                  </button>
                </div>
              </div>

              {/* Real-time slider meters */}
              <div className="space-y-3 bg-slate-955 p-3 rounded-xl border border-slate-800 mt-2 font-mono text-[11px]">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">SYSTEM ARCHITECTURE METRIC METERS:</div>
                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Scalability Potential:</span>
                    <span className={scalability >= 60 ? "text-emerald-400" : "text-amber-400"}>{scalability}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full transition-all duration-300" style={{ width: `${Math.max(10, Math.min(100, scalability))}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Transaction ACID Rigor:</span>
                    <span className={transactions >= 60 ? "text-emerald-400" : "text-amber-400"}>{transactions}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full rounded-full transition-all duration-300" style={{ width: `${Math.max(10, Math.min(100, transactions))}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Developer Complexity Level:</span>
                    <span className={complexity >= 70 ? "text-red-400 font-bold" : "text-emerald-400"}>{complexity}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full transition-all duration-300" style={{ width: `${Math.max(10, Math.min(100, complexity))}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-black/40 p-4 rounded-xl border border-slate-800 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Draft Architecture Decision Record (ADR)
                  </div>
                  {isSystemComplete ? (
                    <pre className="font-mono text-[10px] text-slate-300 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
                      {retrieveADRText()}
                    </pre>
                  ) : (
                    <div className="text-slate-500 italic text-xs h-40 flex items-center justify-center text-center">
                      Select database configuration and network protocol to auto-compile your ADR blueprint dossier...
                    </div>
                  )}
                </div>

                {isSystemComplete && (
                  <button 
                    id="adr_confirm_btn"
                    onClick={handleConfirmADR}
                    className="w-full cursor-pointer mt-4 py-2 rounded font-sans font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg transition"
                  >
                    Approve ADR & Sign Design Dossier
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-bold text-base text-slate-100">ADR Finalized & Committed to Git!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Your architectural rationale is officially saved in markdown directly within your repository. Any future developer who opens the code will understand EXACTLY why you made these trade-offs!
            </p>
            <button onClick={resetGame} className="px-3 py-1.5 bg-slate-705 border border-slate-700 hover:bg-slate-700 rounded text-xs text-slate-200 cursor-pointer">
              Design Another Architecture
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- 6. Umbrella Activities: Team Chaos Manager ---
  if (moduleId === "umbrella") {
    const defaultStats = {
      round: 1,
      stability: 100,
      schedule: 100,
      activeThreat: "none",
      history: [] as string[]
    };
    const state = { ...defaultStats, ...gameState };

    const threats = [
      { id: "bug", name: "💥 Core Auth Bug Leaked into Production", desc: "A developer integrated a login route but skipped security reviews. Attackers are hijacking sessions!", shield: "sqa", fix: "Software Quality Assurance (SQA)", penalty: 30 },
      { id: "merge", name: "⚔️ Git Merge Conflict Nightmare", desc: "Two teammates modified the same route without coordinates. Source files are overwritten!", shield: "scm", fix: "Software Configuration Management (SCM)", penalty: 25 },
      { id: "delay", name: "⏰ Scope Bloat & Missed Deadline Danger", desc: "Client added three unlisted screens, team has zero tracking boards. The coding progress is stalled!", shield: "tracking", fix: "Project Tracking & Control", penalty: 20 },
      { id: "loss", name: "🔥 Single Point of Team Knowledge Failure", desc: "Our solo backend expert had a health issue, and none of the frontend devs knows where the DB keys reside!", shield: "risk", fix: "Risk Management & Documentation", penalty: 15 }
    ];

    useEffect(() => {
      if (moduleId === "umbrella" && !state.activeThreat && state.round <= 3) {
        // Queue first threat
        const randomThreat = threats[state.round - 1];
        setGameState({
          ...state,
          activeThreat: randomThreat.id
        });
      }
    }, [moduleId, state.round]);

    const handleShield = (type: "sqa" | "scm" | "tracking" | "risk") => {
      const activeObj = threats.find(t => t.id === state.activeThreat);
      let updatedLog = "";
      let updatedStability = state.stability;
      let updatedSchedule = state.schedule;

      if (!activeObj) return;

      if (activeObj.shield === type) {
        updatedLog = `🛡️ Perfect Block! You casted '${activeObj.fix}'. System stabilized, keeping developers fully synchronized.`;
        // Small points recovery
        updatedStability += 5;
        updatedSchedule += 5;
      } else {
        updatedLog = `❌ Wrong Guardrail casted! You tried to resolve a ${activeObj.name} with incorrect controls. Net stability dropped by ${activeObj.penalty}%.`;
        updatedStability -= activeObj.penalty;
        updatedSchedule -= 15;
      }

      if (updatedStability < 0) updatedStability = 0;
      if (updatedSchedule < 0) updatedSchedule = 0;
      if (updatedStability > 100) updatedStability = 100;
      if (updatedSchedule > 100) updatedSchedule = 100;

      const nextRound = state.round + 1;
      const runningLogs = [updatedLog, ...state.history];

      if (nextRound > 4) {
        setGameState({
          ...state,
          round: nextRound,
          stability: updatedStability,
          schedule: updatedSchedule,
          activeThreat: "complete",
          history: runningLogs
        });
        if (updatedStability >= 45) {
          setFeedback(`System Salvaged! By implementing SCM, SQA, Risk Assessment and JIRA boards, you survived professional workspace hazards. Final Stability: ${updatedStability}%!`);
          triggerCompletion();
        } else {
          setFeedback(`Project Cancelled! Continuous development quality audits cannot be skipped. Code entropy took over and collapsed the timeline.`);
        }
      } else {
        const nextThreat = threats[nextRound - 1];
        setGameState({
          round: nextRound,
          stability: updatedStability,
          schedule: updatedSchedule,
          activeThreat: nextThreat.id,
          history: runningLogs
        });
      }
    };

    const resetGame = () => {
      setGameState(defaultStats);
      setFeedback("");
      setComplete(false);
    };

    const currentThreatObj = threats.find((t) => t.id === state.activeThreat);

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="umbrella_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5" /> Umbrella Activity Chaos Sandbox
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Defend your engineering squad from ongoing industrial chaos cards using continuous quality pipelines!
        </p>

        {state.activeThreat !== "complete" && currentThreatObj ? (
          <div className="space-y-5 animate-fade-in">
            {/* Health Bars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Code Stability:</span>
                <span className={`font-sans font-bold text-lg ${state.stability >= 50 ? "text-emerald-400" : "text-rose-500"}`}>{state.stability}%</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Schedule Health:</span>
                <span className={`font-sans font-bold text-lg ${state.schedule >= 50 ? "text-emerald-400" : "text-rose-500"}`}>{state.schedule}%</span>
              </div>
            </div>

            {/* Current Active Hazard */}
            <div className="p-4 bg-orange-950/20 border border-orange-800/60 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-sans font-bold text-sm">
                <AlertTriangle className="h-5 w-5 animate-pulse" /> CURRENT THREAT CARD (Round {state.round}/4)
              </div>
              <div className="text-white text-xs font-bold leading-relaxed">{currentThreatObj.name}</div>
              <p className="text-[11px] text-slate-300 leading-relaxed font-sans mt-1">{currentThreatObj.desc}</p>
            </div>

            {/* Defense Options */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block mb-1">CAST UMBRELLA SHIELD GUARDRAIL:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  id="scm_btn"
                  onClick={() => handleShield("scm")}
                  className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 rounded-lg text-left text-xs font-semibold hover:bg-slate-800 transition text-slate-200 cursor-pointer"
                >
                  ⚙️ Config Management (SCM / Git branch policies)
                </button>
                <button
                  id="sqa_btn"
                  onClick={() => handleShield("sqa")}
                  className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 rounded-lg text-left text-xs font-semibold hover:bg-slate-800 transition text-slate-200 cursor-pointer"
                >
                  🧪 Quality Assurance (SQA / Peer Reviews & Tests)
                </button>
                <button
                  id="tracking_btn"
                  onClick={() => handleShield("tracking")}
                  className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 rounded-lg text-left text-xs font-semibold hover:bg-slate-800 transition text-slate-200 cursor-pointer"
                >
                  📅 Project Tracking (Kanban velocity counters)
                </button>
                <button
                  id="risk_btn"
                  onClick={() => handleShield("risk")}
                  className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 rounded-lg text-left text-xs font-semibold hover:bg-slate-800 transition text-slate-200 cursor-pointer"
                >
                  🚨 Risk Assessment (System maps & knowledge documents)
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center space-y-4">
            <div className="flex justify-center">
              {state.stability >= 45 ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400 animate-bounce" />
              ) : (
                <XCircle className="h-12 w-12 text-rose-500" />
              )}
            </div>
            <h4 className="font-bold text-base text-slate-100">
              {state.stability >= 45 ? "Project Delivered Alive!" : "Project Collapse!"}
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">{feedback}</p>
            <div className="flex justify-center gap-3 mt-4">
              <button 
                onClick={resetGame} 
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer text-white"
              >
                <RefreshCw className="h-3 w-3" /> Start New Project
              </button>
              {state.stability >= 45 && (
                <span className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-semibold text-white">
                  ✓ SQA Rules Applied
                </span>
              )}
            </div>
          </div>
        )}

        {state.history.length > 0 && (
          <div className="mt-4">
            <div className="text-[10px] font-mono text-slate-400 mb-1">SHIELD CONTROL OUTPUTS:</div>
            <div className="bg-black/30 p-2.5 rounded-lg font-mono text-[10px] space-y-1 text-slate-300 max-h-24 overflow-y-auto">
              {state.history.map((log: string, idx: number) => (
                <div key={idx} className="border-b border-white/[0.04] pb-1 last:border-0">{log}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 7. Software Engineering Challenges: Legacy Resolver ---
  if (moduleId === "challenges") {
    const defaultLegacyState = {
      legacyDebt: 80,
      vulnerabilities: 65,
      aging: 70,
      round: 1,
      logs: [] as string[]
    };
    const state = { ...defaultLegacyState, ...gameState };

    const handleAction = (type: "refactor" | "sanitize" | "jest" | "docker") => {
      let debt = state.legacyDebt;
      let vulns = state.vulnerabilities;
      let age = state.aging;
      let log = "";

      if (type === "refactor") {
        debt -= 30;
        age -= 10;
        log = `🔧 Refactored core transaction controllers. Spaghetti routines converted to modular classes! (Technical Debt reduced by 30%).`;
      } else if (type === "sanitize") {
        vulns -= 35;
        log = `🔒 Implemented Zod schemas of string parsing. All transaction entry fields are now sanitizing API payloads! (Vulnerabilities reduced by 35%).`;
      } else if (type === "jest") {
        debt -= 10;
        vulns -= 15;
        log = `🧪 Implemented integrated Jest unit tests. Caught 12 silent state mutations before deployment! (Vulnerabilities dropped 15%, Debt down 10%).`;
      } else if (type === "docker") {
        age -= 30;
        log = `🐳 Migrated outdated server components into a secure Docker environment, isolating old libraries safely. (Aging factor dropped by 30%).`;
      }

      const nextRound = state.round + 1;
      const historyLogs = [log, ...state.logs];

      if (debt < 0) debt = 0;
      if (vulns < 0) vulns = 0;
      if (age < 0) age = 0;

      if (nextRound > 3) {
        setGameState({
          ...state,
          round: nextRound,
          legacyDebt: debt,
          vulnerabilities: vulns,
          aging: age,
          logs: historyLogs
        });
        if (debt <= 40 && vulns <= 30 && age <= 40) {
          setFeedback(`System Cleaned! You managed aging components, closed security routes, and refactored messy logic, ensuring this bank infrastructure lives securely. Outstanding legacy maintenance!`);
          triggerCompletion();
        } else {
          setFeedback(`Server outage! You ran out of actions, and your aging parameters remained too high, causing memory leaks and transaction database corruption. Refactoring requires systematic attention.`);
        }
      } else {
        setGameState({
          ...state,
          round: nextRound,
          legacyDebt: debt,
          vulnerabilities: vulns,
          aging: age,
          logs: historyLogs
        });
      }
    };

    const resetGame = () => {
      setGameState(defaultLegacyState);
      setFeedback("");
      setComplete(false);
    };

    const isSuccessfulEnd = state.legacyDebt <= 40 && state.vulnerabilities <= 30 && state.aging <= 40;

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="challenges_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-2">
          <Settings className="h-5 w-5 animate-spin-slow" /> Legacy Bank Maintenance Console
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          BATTLE PLAN: You have 3 actions to reduce ALL aging parameters below threshold (Debt &lt;= 40%, Vulns &lt;= 30%, Aging &lt;= 40%).
        </p>

        {state.round <= 3 ? (
          <div className="space-y-4">
            {/* Meters */}
            <div className="space-y-3 bg-black/40 p-4 rounded-xl border border-slate-800 font-mono text-[11px]">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Legacy Code Spaghetti Debt (Goal &lt;= 40):</span>
                  <span className={state.legacyDebt > 40 ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>{state.legacyDebt}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full transition-all" style={{ width: `${state.legacyDebt}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Security Vulnerabilities (Goal &lt;= 30):</span>
                  <span className={state.vulnerabilities > 30 ? "text-rose-500 font-bold" : "text-emerald-400 font-bold"}>{state.vulnerabilities}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full transition-all" style={{ width: `${state.vulnerabilities}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Software Aging & Obsolete Env (Goal &lt;= 40):</span>
                  <span className={state.aging > 40 ? "text-indigo-400 font-bold" : "text-emerald-400"}>{state.aging}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-400 h-full transition-all" style={{ width: `${state.aging}%` }}></div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                id="refactor_btn"
                onClick={() => handleAction("refactor")}
                className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 text-left rounded-lg text-xs hover:bg-slate-800 transition text-slate-200 cursor-pointer"
              >
                🛠️ Structural Code Refactor (-30% Debt)
              </button>
              <button
                id="sanitize_btn"
                onClick={() => handleAction("sanitize")}
                className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 text-left rounded-lg text-xs hover:bg-slate-800 transition text-slate-200 cursor-pointer"
              >
                🔒 Input Sanitization (-35% Vulns)
              </button>
              <button
                id="jest_btn"
                onClick={() => handleAction("jest")}
                className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 text-left rounded-lg text-xs hover:bg-slate-800 transition text-slate-200 cursor-pointer"
              >
                🧪 Integration Jest Coverage (-15% Vulns, -10% Debt)
              </button>
              <button
                id="docker_btn"
                onClick={() => handleAction("docker")}
                className="p-3 bg-slate-850/60 border border-slate-800 hover:border-amber-400 text-left rounded-lg text-xs hover:bg-slate-800 transition text-slate-200 cursor-pointer"
              >
                🐳 Containerize Environment (-30% Aging)
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700 text-center space-y-4 font-sans">
            <div className="flex justify-center flex-col items-center">
              {isSuccessfulEnd ? (
                <CheckCircle2 className="h-12 w-12 text-emerald-400 animate-bounce mb-2" />
              ) : (
                <XCircle className="h-12 w-12 text-rose-500 mb-2" />
              )}
              <div className="bg-black/40 p-3 rounded text-[11px] font-mono text-left space-y-1 mb-2">
                <div>Final Debt: <span className={state.legacyDebt <= 40 ? "text-emerald-400" : "text-rose-500"}>{state.legacyDebt}%</span></div>
                <div>Final Vulns: <span className={state.vulnerabilities <= 30 ? "text-emerald-400" : "text-rose-500"}>{state.vulnerabilities}%</span></div>
                <div>Final Aging: <span className={state.aging <= 40 ? "text-emerald-400" : "text-rose-500"}>{state.aging}%</span></div>
              </div>
            </div>
            <h4 className="font-bold text-base text-slate-100">
              {isSuccessfulEnd ? "Legacy Refactoring Masterpiece!" : "Outage Triggered!"}
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">{feedback}</p>
            <div className="flex justify-center gap-3">
              <button 
                onClick={resetGame} 
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer text-white"
              >
                <RefreshCw className="h-3 w-3" /> Start Over
              </button>
              {isSuccessfulEnd && (
                <span className="px-4 py-2 bg-emerald-600 rounded-lg text-xs font-semibold text-white">
                  ✓ Legacy Repaired
                </span>
              )}
            </div>
          </div>
        )}

        {state.logs.length > 0 && (
          <div className="mt-4">
            <div className="text-[10px] font-mono text-slate-400 mb-1">ENGINEER AUDIT LOGS:</div>
            <div className="bg-black/30 p-2.5 rounded-lg font-mono text-[10px] space-y-1 text-slate-300 max-h-24 overflow-y-auto">
              {state.logs.map((log: string, idx: number) => (
                <div key={idx} className="border-b border-white/[0.04] pb-1 last:border-0">{log}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 8. Software Development Life Cycle (SDLC) Sandbox ---
  if (moduleId === "sdlc") {
    // Stage order game
    const defaultPhaseSetup = ["Design", "Requirements", "Implementation", "Maintenance", "Testing", "Deployment"];
    const correctOrder = ["Requirements", "Design", "Implementation", "Testing", "Deployment", "Maintenance"];

    const currentOrder = gameState.order || defaultPhaseSetup;
    const orderVerified = gameState.orderVerified || false;
    const isCorrectOrder = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);

    const shiftIndex = (fromIndex: number, direction: "up" | "down") => {
      if (orderVerified) return;
      const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
      if (toIndex < 0 || toIndex >= currentOrder.length) return;

      const updated = [...currentOrder];
      const temp = updated[fromIndex];
      updated[fromIndex] = updated[toIndex];
      updated[toIndex] = temp;

      setGameState({
        ...gameState,
        order: updated
      });
    };

    const verifySequence = () => {
      setGameState({
        ...gameState,
        orderVerified: true
      });

      if (isCorrectOrder) {
        setFeedback("Perfect Chronology! Requirements -> Design -> Implementation -> Testing -> Deployment -> Maintenance. You mastered the classical SDLC flow!");
        triggerCompletion();
      } else {
        setFeedback("Chronology Flawed! Remember: You must analyze Requirements and layout software Design before developers write a single line of Code!");
      }
    };

    const resetGame = () => {
      setGameState({ order: [...defaultPhaseSetup] });
      setFeedback("");
      setComplete(false);
    };

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100" id="sdlc_game">
        <h3 className="font-sans font-bold text-lg text-amber-400 flex items-center gap-2 mb-1">
          <RefreshCw className="h-5 w-5 animate-spin-slow" /> Chronological SDLC Stage Assembly
        </h3>
        <p className="text-xs text-slate-400 mb-6 font-mono">
          Arrange the 6 standard SDLC phases into their logical, correct engineering order (top is first, bottom is last).
        </p>

        <div className="max-w-md mx-auto space-y-2 mb-6">
          {currentOrder.map((phase: string, idx: number) => {
            const isCorrectSlot = phase === correctOrder[idx];
            return (
              <div 
                key={phase} 
                className={`p-3 rounded-lg border flex justify-between items-center transition ${
                  orderVerified 
                    ? (isCorrectSlot ? "bg-emerald-955/20 border-emerald-800 text-emerald-300" : "bg-red-955/20 border-red-800 text-red-300")
                    : "bg-slate-800/80 border-slate-700 text-slate-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs bg-slate-950 text-slate-400 w-6 h-6 rounded-full flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-sans font-bold text-xs">{phase}</span>
                </div>

                {!orderVerified && (
                  <div className="flex gap-2">
                    <button 
                      onClick={() => shiftIndex(idx, "up")} 
                      disabled={idx === 0}
                      className="p-1 px-2 text-[10px] bg-slate-700 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-white"
                    >
                      ▲ Move Up
                    </button>
                    <button 
                      onClick={() => shiftIndex(idx, "down")} 
                      disabled={idx === currentOrder.length - 1}
                      className="p-1 px-2 text-[10px] bg-slate-700 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-white"
                    >
                      ▼ Move Down
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!orderVerified ? (
          <button
            onClick={verifySequence}
            className="w-full py-2.5 rounded bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
          >
            Verify Biological SDLC Order <CheckCircle className="h-4 w-4" />
          </button>
        ) : (
          <div className="text-center space-y-4">
            <div className={`p-4 rounded-xl text-xs leading-relaxed max-w-md mx-auto border ${isCorrectOrder ? "bg-emerald-950/25 border-emerald-800/60 text-emerald-300" : "bg-red-955/25 border-red-800/60 text-red-400"}`}>
              {feedback}
            </div>
            <div className="flex justify-center gap-3">
              <button onClick={resetGame} className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white cursor-pointer select-none">
                Reset Assembly Board
              </button>
              {isCorrectOrder && (
                <span className="px-3 py-1.5 bg-emerald-600 rounded text-xs text-white">
                  ✓ SDLC Stages Decoded
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Fallback / Loading
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center text-slate-500 select-none">
      Select a software engineering concept module above to activate the game panel.
    </div>
  );
}
