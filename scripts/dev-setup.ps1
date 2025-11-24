Write-Host "=== 🚀 DEV SETUP — Entorno de desarrollo ===`n"

# 1) Build de la librería (tsup + types)
Write-Host "📦 Build components-library..."
Set-Location components-library
yarn build

# 2) Volver al root
Set-Location ..

# 3) Levantar microfrontends
Write-Host "▶ Iniciando mfe-characters (http://localhost:5001)"
Start-Process powershell -ArgumentList 'cd mfe-characters; yarn dev'

Write-Host "▶ Iniciando mfe-shell (http://localhost:3000)"
Start-Process powershell -ArgumentList 'cd mfe-shell; yarn dev'

Write-Host "`n🎉 Ambiente de desarrollo listo."
