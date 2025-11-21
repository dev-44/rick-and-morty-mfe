# ==================================================
# 🧹 CLEAN-ALL.ps1 (DEV SAFE - FINAL VERSION)
# ==================================================

$start = Get-Date

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " 🧹 CLEANING ENVIRONMENT (DEV SAFE)" -ForegroundColor Cyan
Write-Host "========================================"
Write-Host ""

# ==================================================
# 1) FREE PORTS 3000 & 5001
# ==================================================

function Stop-Port {
    param ([int]$Port)

    Write-Host "🔎 Revisando puerto $Port..." -ForegroundColor Yellow

    # Buscar SOLO procesos que estén "LISTENING" en ese puerto
    $connections = netstat -ano | Select-String "LISTENING" | Select-String ":$Port "

    if ($connections) {
        foreach ($conn in $connections) {
            $parts = $conn.ToString() -split "\s+"
            $procId = $parts[-1]

            if ($procId -match '^\d+$' -and $procId -ne $PID) {
                Write-Host "   🛑 Terminando PID $procId..." -ForegroundColor Red
                Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
            }
        }
    } else {
        Write-Host "   ✔ Puerto $Port libre." -ForegroundColor Green
    }
}

Stop-Port -Port 3000
Stop-Port -Port 5001
Write-Host ""

# ==================================================
# 2) REMOVE dist AND .vite ONLY (SAFE CLEAN)
# ==================================================

$paths = @(
  "components-library/dist",
  "mfe-shell/dist",
  "mfe-shell/node_modules/.vite",
  "mfe-characters/dist",
  "mfe-characters/node_modules/.vite"
)

foreach ($p in $paths) {
  if (Test-Path $p) {
    Write-Host "   🗑 Eliminando $p ..." -ForegroundColor Red
    Remove-Item $p -Recurse -Force -ErrorAction SilentlyContinue
  } else {
    Write-Host "   ✔ $p no existe." -ForegroundColor Green
  }
}

Write-Host ""
$duration = (Get-Date) - $start

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " ✨ CLEAN COMPLETE (DEV SAFE)" -ForegroundColor Cyan
Write-Host " ⏱ Tiempo: $($duration.TotalSeconds) segundos" -ForegroundColor Gray
Write-Host "========================================"
