Write-Host "=== 🧹 CLEAN ALL — Limpieza total + cierre de puertos ===`n"

# ---------------------------
# 1. CERRAR PUERTOS DE DEV Y PROD DE FORMA SEGURA
# ---------------------------

$ports = @(3000, 5001, 4173, 5173)

foreach ($port in $ports) {
    Write-Host "🔌 Cerrando puerto $port si está en uso..."
    $pids = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique

    foreach ($pid in $pids) {
        try {
            Write-Host "   ➜ Finalizando proceso PID $pid"
            Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
        } catch {
            Write-Host "   ⚠ No se pudo cerrar PID $pid (quizás ya terminó)"
        }
    }
}

Write-Host "`n✔ Puertos liberados.`n"


# ---------------------------
# 2. LIMPIEZA DE DIRECTORIOS
# ---------------------------

# Root
Write-Host "🗑 Eliminando node_modules del root..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Components Library
Write-Host "🗑 components-library..."
Remove-Item -Recurse -Force components-library/node_modules, components-library/dist, components-library/__mf__temp, components-library/.mf_temp, components-library/.vite -ErrorAction SilentlyContinue
Get-ChildItem -Path components-library/src -Recurse -Include *.js, *.js.map | Remove-Item -Force

# MFE Characters
Write-Host "🗑 mfe-characters..."
Remove-Item -Recurse -Force mfe-characters/node_modules, mfe-characters/dist, mfe-characters/__mf__temp, mfe-characters/.mf_temp, mfe-characters/.vite -ErrorAction SilentlyContinue

# MFE Shell
Write-Host "🗑 mfe-shell..."
Remove-Item -Recurse -Force mfe-shell/node_modules, mfe-shell/dist, mfe-shell/__mf__temp, mfe-shell/.mf_temp, mfe-shell/.vite -ErrorAction SilentlyContinue

Write-Host "`n🎉 Limpieza completa y puertos liberados."
