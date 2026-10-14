/* Configuración de la sesión.
   Si dejas databaseURL vacío, la página funciona en MODO INDIVIDUAL
   (cada estudiante ve sus aciertos, pero no hay resultados del grupo). */
window.SESION_CONFIG = {
  // Dirección de tu Firebase Realtime Database, tal como aparece en la consola.
  // Ejemplo: "https://mi-proyecto-default-rtdb.firebaseio.com"
  databaseURL: "",

  // Nombre de la sesión. Cambia este nombre para empezar un grupo nuevo
  // sin borrar los datos del anterior (ej. "grupo-3A-octubre").
  sesion: "grupo-1",

  // Huella SHA-256 de tu clave de docente (NO la clave en sí). Ver README, paso 6.
  // Déjalo vacío para no activar el panel docente.
  claveDocenteSHA256: ""
};
