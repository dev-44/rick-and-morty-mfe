Write-Host "=== 🏗️ BUILD & PREVIEW SETUP — Producción Local ===" -ForegroundColor Cyan
Write-Host ""

# ============================
# 1) Build components-library
# ============================
Write-Host "📦 Construyendo components-library..." -ForegroundColor Yellow
Set-Location components-library

yarn build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al construir components-library — abortando." -ForegroundColor Red
    exit 1
}

# ============================
# 2) Build mfe-characters
# ============================
Write-Host "🧩 Construyendo mfe-characters (remote)..." -ForegroundColor Yellow
Set-Location ../mfe-characters

yarn build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al construir mfe-characters — abortando." -ForegroundColor Red
    exit 1
}

# ============================
# 3) Build mfe-shell
# ============================
Write-Host "🖥️ Construyendo mfe-shell (host)..." -ForegroundColor Yellow
Set-Location ../mfe-shell

yarn build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al construir mfe-shell — abortando." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✔ Build completo para producción." -ForegroundColor Green
Write-Host ""

# ============================
# 4) Iniciar servidores de PREVIEW
# ============================
Write-Host "🌐 Iniciando servidores de producción local..." -ForegroundColor Cyan
Write-Host ""

# Servidor REMOTE (characters)
Write-Host "▶ mfe-characters → http://localhost:5001" -ForegroundColor Yellow
Start-Process powershell -ArgumentList "cd ../mfe-characters; yarn preview"

# Servidor SHELL (host)
Write-Host "▶ mfe-shell → http://localhost:3000" -ForegroundColor Yellow
Start-Process powershell -ArgumentList "cd ../mfe-shell; yarn preview"

Write-Host ""
Write-Host "🚀 Producción local levantada exitosamente." -ForegroundColor Green
Write-Host "🖥️ Shell: http://localhost:3000"
Write-Host "🧩 Characters (remote): http://localhost:5001"
Write-Host ""
Write-Host "🎉 Todo listo."
