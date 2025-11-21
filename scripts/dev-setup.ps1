Write-Host "=== 🔧 DEV SETUP — Entorno de desarrollo ==="

# 1) Build de la librería (NO reinstalar, NO unlink)
Write-Host '📦 Building components-library...'
Set-Location components-library
yarn build-tsup
yarn link

# 2) Asegurar link en mfe-characters
Write-Host '🔗 Linking components-library → mfe-characters'
Set-Location ../mfe-characters
yarn link 'components-library'

# 3) Asegurar link en mfe-shell
Write-Host '🔗 Linking components-library → mfe-shell'
Set-Location ../mfe-shell
yarn link 'components-library'

Write-Host ""
Write-Host "🚀 Levantando microfrontends..."

# 4) Start mfe-characters (DEV MODE)
Write-Host '▶ mfe-characters → http://localhost:5001'
Start-Process powershell -ArgumentList 'cd ../mfe-characters; yarn dev --port 5001'

# 5) Start mfe-shell (DEV MODE)
Write-Host '▶ mfe-shell → http://localhost:3000'
Start-Process powershell -ArgumentList 'cd ../mfe-shell; yarn dev --port 3000'

Write-Host ""
Write-Host "🌐 Shell disponible en: http://localhost:3000"
Write-Host "🎉 Dev setup completo."
