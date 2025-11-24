Write-Host "=== 🧪 TEST ALL ===`n"

Write-Host "▶ Test components-library..."
Set-Location components-library
yarn test

Write-Host "`n▶ Test mfe-characters..."
Set-Location ../mfe-characters
yarn test

Write-Host "`n✔ Tests completados."