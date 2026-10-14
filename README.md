# Interés compuesto y amortización alemana: aprende y participa

Página web interactiva (estilo Mentimeter) con teoría, calculadoras y un cuestionario
de 10 preguntas + 2 de autoevaluación. Incluye panel docente con resultados del grupo.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página completa (no necesita instalar nada). |
| `config.js` | Tu configuración: base de datos, nombre de la sesión y clave docente. |
| `firebase-rules.json` | Reglas de seguridad para copiar en Firebase (paso 4). |

---

## Parte A. Publicar en GitHub Pages (modo individual)

Con solo esta parte la página ya funciona: cada estudiante ve la teoría, contesta,
recibe explicaciones y su resultado. **No** verá cómo respondió el grupo.

1. Entra a <https://github.com> e inicia sesión (o crea tu cuenta gratis).
2. Pulsa **New repository** (botón verde o el signo **+** arriba a la derecha).
   - Nombre, por ejemplo: `sesion-amortizacion`
   - Visibilidad: **Public** (GitHub Pages gratis lo requiere en cuentas personales).
   - Pulsa **Create repository**.
3. En el repositorio nuevo pulsa **uploading an existing file** (o **Add file → Upload files**)
   y arrastra `index.html`, `config.js`, `firebase-rules.json` y `README.md`.
   Pulsa **Commit changes**.
4. Ve a **Settings → Pages**.
   - En **Source** elige **Deploy from a branch**.
   - **Branch**: `main` y carpeta `/ (root)`. Pulsa **Save**.
5. Espera 1 a 2 minutos y recarga. Arriba aparecerá la dirección:
   `https://TU-USUARIO.github.io/sesion-amortizacion/`
6. Comparte esa dirección con tus estudiantes (o genera un código QR).

### Con la línea de comandos (opcional)

```bash
git init
git add .
git commit -m "Sesión de amortización"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sesion-amortizacion.git
git push -u origin main
```

---

## Parte B. Resultados del grupo en vivo (Firebase, gratis)

Opcional. Sirve para que cada estudiante vea cómo respondió el grupo y para
que tú tengas el panel docente.

### 1. Crear el proyecto
1. Entra a <https://console.firebase.google.com> con tu cuenta de Google.
2. **Crear un proyecto** → ponle un nombre → puedes desactivar Google Analytics → **Crear**.

### 2. Crear la base de datos
1. En el menú izquierdo: **Compilación (Build) → Realtime Database → Crear base de datos**.
2. Elige la ubicación más cercana y el modo **bloqueado** (locked mode).
3. Copia la dirección que aparece arriba de los datos, por ejemplo
   `https://mi-proyecto-default-rtdb.firebaseio.com`
   (en otras regiones termina en `.firebasedatabase.app`; cópiala tal cual).

### 3. Pegar la dirección en `config.js`
```js
databaseURL: "https://mi-proyecto-default-rtdb.firebaseio.com",
```
Edita el archivo en GitHub (lápiz ✏️) y pulsa **Commit changes**.

### 4. Pegar las reglas de seguridad
En Firebase, pestaña **Reglas** de Realtime Database: borra lo que haya, pega el contenido
de `firebase-rules.json` y pulsa **Publicar**.

### 5. Probar
Abre tu página, contesta una pregunta y revisa que aparezca el bloque
**Así respondió el grupo**. Si dice "modo individual", revisa que `databaseURL` esté bien escrita.

### 6. Activar el panel docente
1. Elige una clave, por ejemplo `naranja-2026-clase`.
2. Calcula su huella SHA-256 (cualquiera de estas formas):
   - **Mac/Linux:** `echo -n "naranja-2026-clase" | shasum -a 256`
   - **Windows (PowerShell):**
     `[BitConverter]::ToString((New-Object Security.Cryptography.SHA256Managed).ComputeHash([Text.Encoding]::UTF8.GetBytes("naranja-2026-clase"))).Replace("-","").ToLower()`
   - **Navegador:** busca “SHA-256 online” y pega tu clave.
3. Pega la huella (64 caracteres) en `config.js`:
   ```js
   claveDocenteSHA256: "e3b0c442...",
   ```
4. Abre tu página así: `https://TU-USUARIO.github.io/sesion-amortizacion/?docente=naranja-2026-clase`
   Aparecerá la pestaña **Panel docente**. Los estudiantes, que entran sin `?docente=`, no la ven.

### 7. Empezar un grupo nuevo
Cambia `sesion: "grupo-1"` por otro nombre (por ejemplo `"grupo-2"`) en `config.js`,
o usa **Borrar respuestas del grupo** en el panel docente. Para que los estudiantes
vuelvan a contestar desde cero en su propio dispositivo, deben pulsar **Volver a empezar**.

---

## Limitaciones que conviene conocer

- **Seguridad ligera.** Es una herramienta de clase, no un sistema de evaluación formal.
  La clave docente solo oculta el panel; las reglas permiten leer y escribir respuestas
  a quien conozca la dirección. Las respuestas son anónimas y no se guarda ningún nombre.
- **Identidad por dispositivo.** Cada navegador recibe un identificador aleatorio.
  Si un estudiante cambia de celular o borra los datos del navegador, cuenta como otra persona.
- **Actualización cada 4 segundos.** Los resultados del grupo no son instantáneos.
- **Costos y límites.** El plan gratuito de Firebase (Spark) alcanza para un grupo escolar,
  pero revisa los límites vigentes en <https://firebase.google.com/pricing>.
- **Fuentes.** El diseño usa Google Fonts; sin internet se muestran fuentes del sistema.

## Probar en tu computadora

```bash
python3 -m http.server 8000
```
y abre <http://localhost:8000>.

## Personalizar

- **Preguntas:** en `index.html` busca `const Q=[` (opción múltiple) y `const S=[` (autoevaluación).
  Cada pregunta tiene `text`, `opts`, `correct` (posición de la respuesta correcta, empezando en 0) y `explain`.
- **Teoría:** está en el HTML dentro de `<section id="p-aprende">`.
- **Colores:** variables al inicio del `<style>` (`--teal`, `--gold`, etc.).
