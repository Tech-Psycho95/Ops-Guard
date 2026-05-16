# Ops Guard

A role-based payment operations UI demonstrating RBAC concepts 
for fintech platforms. Built as part of my C4GT 2025 application 
for the openMF PH-EE Operations Web project.

## Demo

[vercel](ops-guard-eyhv.vercel.app/)

## Test Credentials

| Role     | Email                  | Password  |
|----------|------------------------|-----------|
| Admin    | admin@ph-ee.org        | admin123  |
| Operator | operator@ph-ee.org     | op123     |

## Features

- Login page with role-based authentication (no backend)
- Admin view: full transaction table + Manage Users page
- Operator view: read-only transactions only
- Navbar showing logged-in user, role badge, and logout
- Built with React Router for protected routing

## Tech Stack

- React + Vite
- ShadCN/UI (Radix)
- Tailwind CSS
- React Router

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/ops-guard.git
cd ops-guard
npm install
npm run dev
```
