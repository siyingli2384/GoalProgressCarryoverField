const rawModules = [
  {
    id: "module-1",
    title: "Module 1",
    theme: "Greetings",
    words: [
      { id: "m1-1", spanish: "saludo", english: "greeting" },
      { id: "m1-2", spanish: "adios", english: "goodbye" },
      { id: "m1-3", spanish: "por favor", english: "please" },
      { id: "m1-4", spanish: "gracias", english: "thank you" },
      { id: "m1-5", spanish: "de nada", english: "you're welcome" },
      { id: "m1-6", spanish: "perdon", english: "excuse me" },
      { id: "m1-7", spanish: "si", english: "yes" },
      { id: "m1-8", spanish: "no", english: "no" },
      { id: "m1-9", spanish: "buenos dias", english: "good morning" },
      { id: "m1-10", spanish: "buenas tardes", english: "good afternoon" },
      { id: "m1-11", spanish: "buenas noches", english: "good night" },
      { id: "m1-12", spanish: "lo siento", english: "I'm sorry" },
      { id: "m1-13", spanish: "bien", english: "well" },
      { id: "m1-14", spanish: "mal", english: "badly" },
      { id: "m1-15", spanish: "hasta luego", english: "see you later" },
    ],
  },
  {
    id: "module-2",
    title: "Module 2",
    theme: "People",
    words: [
      { id: "m2-1", spanish: "persona", english: "person" },
      { id: "m2-2", spanish: "amigo", english: "friend" },
      { id: "m2-3", spanish: "familia", english: "family" },
      { id: "m2-4", spanish: "madre", english: "mother" },
      { id: "m2-5", spanish: "padre", english: "father" },
      { id: "m2-6", spanish: "hijo", english: "son" },
      { id: "m2-7", spanish: "hija", english: "daughter" },
      { id: "m2-8", spanish: "hermano", english: "brother" },
      { id: "m2-9", spanish: "hermana", english: "sister" },
      { id: "m2-10", spanish: "abuelo", english: "grandfather" },
      { id: "m2-11", spanish: "abuela", english: "grandmother" },
      { id: "m2-12", spanish: "nino", english: "boy" },
      { id: "m2-13", spanish: "nina", english: "girl" },
      { id: "m2-14", spanish: "hombre", english: "man" },
      { id: "m2-15", spanish: "mujer", english: "woman" },
    ],
  },
  {
    id: "module-3",
    title: "Module 3",
    theme: "Food",
    words: [
      { id: "m3-1", spanish: "comida", english: "food" },
      { id: "m3-2", spanish: "pan", english: "bread" },
      { id: "m3-3", spanish: "arroz", english: "rice" },
      { id: "m3-4", spanish: "huevo", english: "egg" },
      { id: "m3-5", spanish: "queso", english: "cheese" },
      { id: "m3-6", spanish: "pollo", english: "chicken" },
      { id: "m3-7", spanish: "carne", english: "meat" },
      { id: "m3-8", spanish: "pescado", english: "fish" },
      { id: "m3-9", spanish: "fruta", english: "fruit" },
      { id: "m3-10", spanish: "manzana", english: "apple" },
      { id: "m3-11", spanish: "platano", english: "banana" },
      { id: "m3-12", spanish: "naranja", english: "orange" },
      { id: "m3-13", spanish: "sopa", english: "soup" },
      { id: "m3-14", spanish: "ensalada", english: "salad" },
      { id: "m3-15", spanish: "verdura", english: "vegetable" },
    ],
  },
  {
    id: "module-4",
    title: "Module 4",
    theme: "Drinks and Meals",
    words: [
      { id: "m4-1", spanish: "agua", english: "water" },
      { id: "m4-2", spanish: "cafe", english: "coffee" },
      { id: "m4-3", spanish: "te", english: "tea" },
      { id: "m4-4", spanish: "leche", english: "milk" },
      { id: "m4-5", spanish: "jugo", english: "juice" },
      { id: "m4-6", spanish: "vaso", english: "glass" },
      { id: "m4-7", spanish: "plato", english: "plate" },
      { id: "m4-8", spanish: "cuchara", english: "spoon" },
      { id: "m4-9", spanish: "tenedor", english: "fork" },
      { id: "m4-10", spanish: "cuchillo", english: "knife" },
      { id: "m4-11", spanish: "desayuno", english: "breakfast" },
      { id: "m4-12", spanish: "almuerzo", english: "lunch" },
      { id: "m4-13", spanish: "cena", english: "dinner" },
      { id: "m4-14", spanish: "azucar", english: "sugar" },
      { id: "m4-15", spanish: "sal", english: "salt" },
    ],
  },
  {
    id: "module-5",
    title: "Module 5",
    theme: "Home",
    words: [
      { id: "m5-1", spanish: "casa", english: "house" },
      { id: "m5-2", spanish: "cuarto", english: "room" },
      { id: "m5-3", spanish: "cocina", english: "kitchen" },
      { id: "m5-4", spanish: "bano", english: "bathroom" },
      { id: "m5-5", spanish: "puerta", english: "door" },
      { id: "m5-6", spanish: "ventana", english: "window" },
      { id: "m5-7", spanish: "mesa", english: "table" },
      { id: "m5-8", spanish: "silla", english: "chair" },
      { id: "m5-9", spanish: "cama", english: "bed" },
      { id: "m5-10", spanish: "luz", english: "lamp" },
      { id: "m5-11", spanish: "pared", english: "wall" },
      { id: "m5-12", spanish: "piso", english: "floor" },
      { id: "m5-13", spanish: "jardin", english: "garden" },
      { id: "m5-14", spanish: "llave", english: "key" },
      { id: "m5-15", spanish: "reloj", english: "clock" },
    ],
  },
  {
    id: "module-6",
    title: "Module 6",
    theme: "Places",
    words: [
      { id: "m6-1", spanish: "escuela", english: "school" },
      { id: "m6-2", spanish: "tienda", english: "store" },
      { id: "m6-3", spanish: "mercado", english: "market" },
      { id: "m6-4", spanish: "parque", english: "park" },
      { id: "m6-5", spanish: "calle", english: "street" },
      { id: "m6-6", spanish: "ciudad", english: "city" },
      { id: "m6-7", spanish: "pueblo", english: "town" },
      { id: "m6-8", spanish: "pais", english: "country" },
      { id: "m6-9", spanish: "playa", english: "beach" },
      { id: "m6-10", spanish: "banco", english: "bank" },
      { id: "m6-11", spanish: "hospital", english: "hospital" },
      { id: "m6-12", spanish: "restaurante", english: "restaurant" },
      { id: "m6-13", spanish: "hotel", english: "hotel" },
      { id: "m6-14", spanish: "biblioteca", english: "library" },
      { id: "m6-15", spanish: "oficina", english: "office" },
    ],
  },
  {
    id: "module-7",
    title: "Module 7",
    theme: "Travel",
    words: [
      { id: "m7-1", spanish: "coche", english: "car" },
      { id: "m7-2", spanish: "autobus", english: "bus" },
      { id: "m7-3", spanish: "tren", english: "train" },
      { id: "m7-4", spanish: "bicicleta", english: "bicycle" },
      { id: "m7-5", spanish: "camino", english: "road" },
      { id: "m7-6", spanish: "mapa", english: "map" },
      { id: "m7-7", spanish: "viaje", english: "trip" },
      { id: "m7-8", spanish: "maleta", english: "suitcase" },
      { id: "m7-9", spanish: "boleto", english: "ticket" },
      { id: "m7-10", spanish: "estacion", english: "station" },
      { id: "m7-11", spanish: "aeropuerto", english: "airport" },
      { id: "m7-12", spanish: "entrada", english: "entrance" },
      { id: "m7-13", spanish: "salida", english: "exit" },
      { id: "m7-14", spanish: "izquierda", english: "left" },
      { id: "m7-15", spanish: "derecha", english: "right" },
    ],
  },
  {
    id: "module-8",
    title: "Module 8",
    theme: "Time",
    words: [
      { id: "m8-1", spanish: "tiempo", english: "time" },
      { id: "m8-2", spanish: "dia", english: "day" },
      { id: "m8-3", spanish: "semana", english: "week" },
      { id: "m8-4", spanish: "mes", english: "month" },
      { id: "m8-5", spanish: "ano", english: "year" },
      { id: "m8-6", spanish: "hora", english: "hour" },
      { id: "m8-7", spanish: "minuto", english: "minute" },
      { id: "m8-8", spanish: "hoy", english: "today" },
      { id: "m8-9", spanish: "manana", english: "tomorrow" },
      { id: "m8-10", spanish: "ayer", english: "yesterday" },
      { id: "m8-11", spanish: "ahora", english: "now" },
      { id: "m8-12", spanish: "luego", english: "later" },
      { id: "m8-13", spanish: "temprano", english: "early" },
      { id: "m8-14", spanish: "tarde", english: "late" },
      { id: "m8-15", spanish: "noche", english: "night" },
    ],
  },
  {
    id: "module-9",
    title: "Module 9",
    theme: "Colors",
    words: [
      { id: "m9-1", spanish: "rojo", english: "red" },
      { id: "m9-2", spanish: "azul", english: "blue" },
      { id: "m9-3", spanish: "verde", english: "green" },
      { id: "m9-4", spanish: "amarillo", english: "yellow" },
      { id: "m9-5", spanish: "negro", english: "black" },
      { id: "m9-6", spanish: "blanco", english: "white" },
      { id: "m9-7", spanish: "gris", english: "gray" },
      { id: "m9-8", spanish: "rosa", english: "pink" },
      { id: "m9-9", spanish: "morado", english: "purple" },
      { id: "m9-10", spanish: "marron", english: "brown" },
      { id: "m9-11", spanish: "claro", english: "light" },
      { id: "m9-12", spanish: "oscuro", english: "dark" },
      { id: "m9-13", spanish: "color", english: "color" },
      { id: "m9-14", spanish: "dorado", english: "gold" },
      { id: "m9-15", spanish: "plateado", english: "silver" },
    ],
  },
  {
    id: "module-10",
    title: "Module 10",
    theme: "Descriptions",
    words: [
      { id: "m10-1", spanish: "grande", english: "big" },
      { id: "m10-2", spanish: "pequeno", english: "small" },
      { id: "m10-3", spanish: "alto", english: "tall" },
      { id: "m10-4", spanish: "bajo", english: "short" },
      { id: "m10-5", spanish: "bueno", english: "good" },
      { id: "m10-6", spanish: "malo", english: "bad" },
      { id: "m10-7", spanish: "nuevo", english: "new" },
      { id: "m10-8", spanish: "viejo", english: "old" },
      { id: "m10-9", spanish: "bonito", english: "pretty" },
      { id: "m10-10", spanish: "feo", english: "ugly" },
      { id: "m10-11", spanish: "facil", english: "easy" },
      { id: "m10-12", spanish: "dificil", english: "difficult" },
      { id: "m10-13", spanish: "rapido", english: "fast" },
      { id: "m10-14", spanish: "lento", english: "slow" },
      { id: "m10-15", spanish: "importante", english: "important" },
    ],
  },
  {
    id: "module-11",
    title: "Module 11",
    theme: "Actions 1",
    words: [
      { id: "m11-1", spanish: "ser", english: "to be" },
      { id: "m11-2", spanish: "estar", english: "to be located" },
      { id: "m11-3", spanish: "tener", english: "to have" },
      { id: "m11-4", spanish: "hacer", english: "to do" },
      { id: "m11-5", spanish: "ir", english: "to go" },
      { id: "m11-6", spanish: "venir", english: "to come" },
      { id: "m11-7", spanish: "ver", english: "to see" },
      { id: "m11-8", spanish: "mirar", english: "to look" },
      { id: "m11-9", spanish: "hablar", english: "to speak" },
      { id: "m11-10", spanish: "escuchar", english: "to listen" },
      { id: "m11-11", spanish: "leer", english: "to read" },
      { id: "m11-12", spanish: "escribir", english: "to write" },
      { id: "m11-13", spanish: "comer", english: "to eat" },
      { id: "m11-14", spanish: "beber", english: "to drink" },
      { id: "m11-15", spanish: "tomar", english: "to take" },
    ],
  },
  {
    id: "module-12",
    title: "Module 12",
    theme: "Actions 2",
    words: [
      { id: "m12-1", spanish: "abrir", english: "to open" },
      { id: "m12-2", spanish: "cerrar", english: "to close" },
      { id: "m12-3", spanish: "dormir", english: "to sleep" },
      { id: "m12-4", spanish: "vivir", english: "to live" },
      { id: "m12-5", spanish: "trabajar", english: "to work" },
      { id: "m12-6", spanish: "estudiar", english: "to study" },
      { id: "m12-7", spanish: "aprender", english: "to learn" },
      { id: "m12-8", spanish: "buscar", english: "to look for" },
      { id: "m12-9", spanish: "caminar", english: "to walk" },
      { id: "m12-10", spanish: "correr", english: "to run" },
      { id: "m12-11", spanish: "jugar", english: "to play" },
      { id: "m12-12", spanish: "ayudar", english: "to help" },
      { id: "m12-13", spanish: "usar", english: "to use" },
      { id: "m12-14", spanish: "querer", english: "to want" },
      { id: "m12-15", spanish: "necesitar", english: "to need" },
    ],
  },
  {
    id: "module-13",
    title: "Module 13",
    theme: "Body",
    words: [
      { id: "m13-1", spanish: "cabeza", english: "head" },
      { id: "m13-2", spanish: "cara", english: "face" },
      { id: "m13-3", spanish: "ojo", english: "eye" },
      { id: "m13-4", spanish: "nariz", english: "nose" },
      { id: "m13-5", spanish: "boca", english: "mouth" },
      { id: "m13-6", spanish: "oreja", english: "ear" },
      { id: "m13-7", spanish: "mano", english: "hand" },
      { id: "m13-8", spanish: "brazo", english: "arm" },
      { id: "m13-9", spanish: "pie", english: "foot" },
      { id: "m13-10", spanish: "pierna", english: "leg" },
      { id: "m13-11", spanish: "dedo", english: "finger" },
      { id: "m13-12", spanish: "pelo", english: "hair" },
      { id: "m13-13", spanish: "cuerpo", english: "body" },
      { id: "m13-14", spanish: "corazon", english: "heart" },
      { id: "m13-15", spanish: "espalda", english: "back" },
    ],
  },
  {
    id: "module-14",
    title: "Module 14",
    theme: "Clothing",
    words: [
      { id: "m14-1", spanish: "ropa", english: "clothes" },
      { id: "m14-2", spanish: "camisa", english: "shirt" },
      { id: "m14-3", spanish: "pantalon", english: "pants" },
      { id: "m14-4", spanish: "vestido", english: "dress" },
      { id: "m14-5", spanish: "zapato", english: "shoe" },
      { id: "m14-6", spanish: "sombrero", english: "hat" },
      { id: "m14-7", spanish: "abrigo", english: "coat" },
      { id: "m14-8", spanish: "falda", english: "skirt" },
      { id: "m14-9", spanish: "calcetin", english: "sock" },
      { id: "m14-10", spanish: "chaqueta", english: "jacket" },
      { id: "m14-11", spanish: "bolsa", english: "bag" },
      { id: "m14-12", spanish: "cinturon", english: "belt" },
      { id: "m14-13", spanish: "gafas", english: "glasses" },
      { id: "m14-14", spanish: "remera", english: "t-shirt" },
      { id: "m14-15", spanish: "bufanda", english: "scarf" },
    ],
  },
  {
    id: "module-15",
    title: "Module 15",
    theme: "Weather",
    words: [
      { id: "m15-1", spanish: "sol", english: "sun" },
      { id: "m15-2", spanish: "lluvia", english: "rain" },
      { id: "m15-3", spanish: "nieve", english: "snow" },
      { id: "m15-4", spanish: "viento", english: "wind" },
      { id: "m15-5", spanish: "nube", english: "cloud" },
      { id: "m15-6", spanish: "cielo", english: "sky" },
      { id: "m15-7", spanish: "calor", english: "heat" },
      { id: "m15-8", spanish: "frio", english: "cold" },
      { id: "m15-9", spanish: "caliente", english: "hot" },
      { id: "m15-10", spanish: "fresco", english: "cool" },
      { id: "m15-11", spanish: "humedo", english: "humid" },
      { id: "m15-12", spanish: "seco", english: "dry" },
      { id: "m15-13", spanish: "tormenta", english: "storm" },
      { id: "m15-14", spanish: "llover", english: "to rain" },
      { id: "m15-15", spanish: "nevar", english: "to snow" },
    ],
  },
  {
    id: "module-16",
    title: "Module 16",
    theme: "School",
    words: [
      { id: "m16-1", spanish: "libro", english: "book" },
      { id: "m16-2", spanish: "papel", english: "paper" },
      { id: "m16-3", spanish: "lapiz", english: "pencil" },
      { id: "m16-4", spanish: "pluma", english: "pen" },
      { id: "m16-5", spanish: "clase", english: "class" },
      { id: "m16-6", spanish: "maestro", english: "teacher" },
      { id: "m16-7", spanish: "estudiante", english: "student" },
      { id: "m16-8", spanish: "tarea", english: "homework" },
      { id: "m16-9", spanish: "pregunta", english: "question" },
      { id: "m16-10", spanish: "respuesta", english: "answer" },
      { id: "m16-11", spanish: "mesa escolar", english: "school desk" },
      { id: "m16-12", spanish: "pizarra", english: "board" },
      { id: "m16-13", spanish: "mochila", english: "backpack" },
      { id: "m16-14", spanish: "examen", english: "test" },
      { id: "m16-15", spanish: "nota", english: "grade" },
    ],
  },
  {
    id: "module-17",
    title: "Module 17",
    theme: "Numbers",
    words: [
      { id: "m17-1", spanish: "uno", english: "one" },
      { id: "m17-2", spanish: "dos", english: "two" },
      { id: "m17-3", spanish: "tres", english: "three" },
      { id: "m17-4", spanish: "cuatro", english: "four" },
      { id: "m17-5", spanish: "cinco", english: "five" },
      { id: "m17-6", spanish: "seis", english: "six" },
      { id: "m17-7", spanish: "siete", english: "seven" },
      { id: "m17-8", spanish: "ocho", english: "eight" },
      { id: "m17-9", spanish: "nueve", english: "nine" },
      { id: "m17-10", spanish: "diez", english: "ten" },
      { id: "m17-11", spanish: "once", english: "eleven" },
      { id: "m17-12", spanish: "doce", english: "twelve" },
      { id: "m17-13", spanish: "trece", english: "thirteen" },
      { id: "m17-14", spanish: "catorce", english: "fourteen" },
      { id: "m17-15", spanish: "quince", english: "fifteen" },
    ],
  },
  {
    id: "module-18",
    title: "Module 18",
    theme: "Feelings",
    words: [
      { id: "m18-1", spanish: "feliz", english: "happy" },
      { id: "m18-2", spanish: "triste", english: "sad" },
      { id: "m18-3", spanish: "cansado", english: "tired" },
      { id: "m18-4", spanish: "enfermo", english: "sick" },
      { id: "m18-5", spanish: "tranquilo", english: "calm" },
      { id: "m18-6", spanish: "nervioso", english: "nervous" },
      { id: "m18-7", spanish: "contento", english: "glad" },
      { id: "m18-8", spanish: "ocupado", english: "busy" },
      { id: "m18-9", spanish: "listo", english: "ready" },
      { id: "m18-10", spanish: "seguro", english: "sure" },
      { id: "m18-11", spanish: "solo", english: "alone" },
      { id: "m18-12", spanish: "hambriento", english: "hungry" },
      { id: "m18-13", spanish: "sediento", english: "thirsty" },
      { id: "m18-14", spanish: "amable", english: "kind" },
      { id: "m18-15", spanish: "fuerte", english: "strong" },
    ],
  },
  {
    id: "module-19",
    title: "Module 19",
    theme: "Daily Objects",
    words: [
      { id: "m19-1", spanish: "telefono", english: "phone" },
      { id: "m19-2", spanish: "computadora", english: "computer" },
      { id: "m19-3", spanish: "dinero", english: "money" },
      { id: "m19-4", spanish: "tarjeta", english: "card" },
      { id: "m19-5", spanish: "foto", english: "photo" },
      { id: "m19-6", spanish: "musica", english: "music" },
      { id: "m19-7", spanish: "pelicula", english: "movie" },
      { id: "m19-8", spanish: "cancion", english: "song" },
      { id: "m19-9", spanish: "mesa pequena", english: "small table" },
      { id: "m19-10", spanish: "botella", english: "bottle" },
      { id: "m19-11", spanish: "caja", english: "box" },
      { id: "m19-12", spanish: "regalo", english: "gift" },
      { id: "m19-13", spanish: "papelera", english: "trash can" },
      { id: "m19-14", spanish: "espejo", english: "mirror" },
      { id: "m19-15", spanish: "jabon", english: "soap" },
    ],
  },
  {
    id: "module-20",
    title: "Module 20",
    theme: "Useful Words",
    words: [
      { id: "m20-1", spanish: "aqui", english: "here" },
      { id: "m20-2", spanish: "alli", english: "there" },
      { id: "m20-3", spanish: "cerca", english: "near" },
      { id: "m20-4", spanish: "lejos", english: "far" },
      { id: "m20-5", spanish: "dentro", english: "inside" },
      { id: "m20-6", spanish: "fuera", english: "outside" },
      { id: "m20-7", spanish: "arriba", english: "up" },
      { id: "m20-8", spanish: "abajo", english: "down" },
      { id: "m20-9", spanish: "muy", english: "very" },
      { id: "m20-10", spanish: "poco", english: "little" },
      { id: "m20-11", spanish: "tambien", english: "also" },
      { id: "m20-12", spanish: "siempre", english: "always" },
      { id: "m20-13", spanish: "nunca", english: "never" },
      { id: "m20-14", spanish: "otra vez", english: "again" },
      { id: "m20-15", spanish: "juntos", english: "together" },
    ],
  },
  {
    id: "module-21",
    title: "Module 21",
    theme: "Days",
    words: [
      { id: "m21-1", spanish: "lunes", english: "Monday" },
      { id: "m21-2", spanish: "martes", english: "Tuesday" },
      { id: "m21-3", spanish: "miercoles", english: "Wednesday" },
      { id: "m21-4", spanish: "jueves", english: "Thursday" },
      { id: "m21-5", spanish: "viernes", english: "Friday" },
      { id: "m21-6", spanish: "sabado", english: "Saturday" },
      { id: "m21-7", spanish: "domingo", english: "Sunday" },
      { id: "m21-8", spanish: "manana temprano", english: "tomorrow morning" },
      { id: "m21-9", spanish: "mediodia", english: "noon" },
      { id: "m21-10", spanish: "medianoche", english: "midnight" },
      { id: "m21-11", spanish: "fin de semana", english: "weekend" },
      { id: "m21-12", spanish: "diario", english: "daily" },
      { id: "m21-13", spanish: "cada dia", english: "each day" },
      { id: "m21-14", spanish: "pronto", english: "soon" },
      { id: "m21-15", spanish: "despues", english: "after" },
    ],
  },
  {
    id: "module-22",
    title: "Module 22",
    theme: "Months",
    words: [
      { id: "m22-1", spanish: "enero", english: "January" },
      { id: "m22-2", spanish: "febrero", english: "February" },
      { id: "m22-3", spanish: "marzo", english: "March" },
      { id: "m22-4", spanish: "abril", english: "April" },
      { id: "m22-5", spanish: "mayo", english: "May" },
      { id: "m22-6", spanish: "junio", english: "June" },
      { id: "m22-7", spanish: "julio", english: "July" },
      { id: "m22-8", spanish: "agosto", english: "August" },
      { id: "m22-9", spanish: "septiembre", english: "September" },
      { id: "m22-10", spanish: "octubre", english: "October" },
      { id: "m22-11", spanish: "noviembre", english: "November" },
      { id: "m22-12", spanish: "diciembre", english: "December" },
      { id: "m22-13", spanish: "estacion del ano", english: "season" },
      { id: "m22-14", spanish: "primavera", english: "spring" },
      { id: "m22-15", spanish: "verano", english: "summer" },
    ],
  },
  {
    id: "module-23",
    title: "Module 23",
    theme: "Animals",
    words: [
      { id: "m23-1", spanish: "perro", english: "dog" },
      { id: "m23-2", spanish: "gato", english: "cat" },
      { id: "m23-3", spanish: "pajaro", english: "bird" },
      { id: "m23-4", spanish: "pez", english: "live fish" },
      { id: "m23-5", spanish: "caballo", english: "horse" },
      { id: "m23-6", spanish: "vaca", english: "cow" },
      { id: "m23-7", spanish: "cerdo", english: "pig" },
      { id: "m23-8", spanish: "oveja", english: "sheep" },
      { id: "m23-9", spanish: "pollo animal", english: "chicken animal" },
      { id: "m23-10", spanish: "pato", english: "duck" },
      { id: "m23-11", spanish: "conejo", english: "rabbit" },
      { id: "m23-12", spanish: "raton", english: "mouse" },
      { id: "m23-13", spanish: "animal", english: "animal" },
      { id: "m23-14", spanish: "mascota", english: "pet" },
      { id: "m23-15", spanish: "granja", english: "farm" },
    ],
  },
  {
    id: "module-24",
    title: "Module 24",
    theme: "Nature",
    words: [
      { id: "m24-1", spanish: "arbol", english: "tree" },
      { id: "m24-2", spanish: "flor", english: "flower" },
      { id: "m24-3", spanish: "rio", english: "river" },
      { id: "m24-4", spanish: "lago", english: "lake" },
      { id: "m24-5", spanish: "mar", english: "sea" },
      { id: "m24-6", spanish: "montana", english: "mountain" },
      { id: "m24-7", spanish: "bosque", english: "forest" },
      { id: "m24-8", spanish: "campo", english: "countryside" },
      { id: "m24-9", spanish: "tierra", english: "earth" },
      { id: "m24-10", spanish: "arena", english: "sand" },
      { id: "m24-11", spanish: "piedra", english: "stone" },
      { id: "m24-12", spanish: "hoja", english: "leaf" },
      { id: "m24-13", spanish: "raiz", english: "root" },
      { id: "m24-14", spanish: "naturaleza", english: "nature" },
      { id: "m24-15", spanish: "aire", english: "air" },
    ],
  },
  {
    id: "module-25",
    title: "Module 25",
    theme: "Shopping",
    words: [
      { id: "m25-1", spanish: "comprador", english: "shopper" },
      { id: "m25-2", spanish: "precio", english: "price" },
      { id: "m25-3", spanish: "barato", english: "cheap" },
      { id: "m25-4", spanish: "caro", english: "expensive" },
      { id: "m25-5", spanish: "recibo", english: "receipt" },
      { id: "m25-6", spanish: "cambio", english: "change" },
      { id: "m25-7", spanish: "moneda", english: "coin" },
      { id: "m25-8", spanish: "billete", english: "bill" },
      { id: "m25-9", spanish: "vendedor", english: "seller" },
      { id: "m25-10", spanish: "venta", english: "sale" },
      { id: "m25-11", spanish: "talla", english: "size" },
      { id: "m25-12", spanish: "lista", english: "list" },
      { id: "m25-13", spanish: "producto", english: "product" },
      { id: "m25-14", spanish: "oferta", english: "deal" },
      { id: "m25-15", spanish: "mercancia", english: "merchandise" },
    ],
  },
  {
    id: "module-26",
    title: "Module 26",
    theme: "Health",
    words: [
      { id: "m26-1", spanish: "salud", english: "health" },
      { id: "m26-2", spanish: "dolor", english: "pain" },
      { id: "m26-3", spanish: "medicina", english: "medicine" },
      { id: "m26-4", spanish: "doctor general", english: "general doctor" },
      { id: "m26-5", spanish: "clinica", english: "clinic" },
      { id: "m26-6", spanish: "fiebre", english: "fever" },
      { id: "m26-7", spanish: "tos", english: "cough" },
      { id: "m26-8", spanish: "descanso", english: "rest" },
      { id: "m26-9", spanish: "sueno", english: "sleepiness" },
      { id: "m26-10", spanish: "herida", english: "wound" },
      { id: "m26-11", spanish: "ayuda medica", english: "medical help" },
      { id: "m26-12", spanish: "farmacia", english: "pharmacy" },
      { id: "m26-13", spanish: "vitamina", english: "vitamin" },
      { id: "m26-14", spanish: "energia", english: "energy" },
      { id: "m26-15", spanish: "cuidado", english: "care" },
    ],
  },
  {
    id: "module-27",
    title: "Module 27",
    theme: "Chores",
    words: [
      { id: "m27-1", spanish: "limpiar", english: "to clean" },
      { id: "m27-2", spanish: "lavar", english: "to wash" },
      { id: "m27-3", spanish: "cocinar", english: "to cook" },
      { id: "m27-4", spanish: "ordenar", english: "to tidy" },
      { id: "m27-5", spanish: "barrer", english: "to sweep" },
      { id: "m27-6", spanish: "sacar", english: "to take out" },
      { id: "m27-7", spanish: "poner", english: "to put" },
      { id: "m27-8", spanish: "quitar", english: "to remove" },
      { id: "m27-9", spanish: "guardar", english: "to save" },
      { id: "m27-10", spanish: "planchar", english: "to iron" },
      { id: "m27-11", spanish: "arreglar", english: "to fix" },
      { id: "m27-12", spanish: "regar", english: "to water" },
      { id: "m27-13", spanish: "doblar", english: "to fold" },
      { id: "m27-14", spanish: "basura", english: "trash" },
      { id: "m27-15", spanish: "ropa sucia", english: "dirty laundry" },
    ],
  },
  {
    id: "module-28",
    title: "Module 28",
    theme: "Hobbies",
    words: [
      { id: "m28-1", spanish: "deporte", english: "sport" },
      { id: "m28-2", spanish: "futbol", english: "soccer" },
      { id: "m28-3", spanish: "baile", english: "dance" },
      { id: "m28-4", spanish: "dibujo", english: "drawing" },
      { id: "m28-5", spanish: "juego", english: "game" },
      { id: "m28-6", spanish: "lectura", english: "reading" },
      { id: "m28-7", spanish: "pintura", english: "painting" },
      { id: "m28-8", spanish: "natacion", english: "swimming" },
      { id: "m28-9", spanish: "canto", english: "singing" },
      { id: "m28-10", spanish: "cocinar en casa", english: "cooking at home" },
      { id: "m28-11", spanish: "paseo", english: "walk" },
      { id: "m28-12", spanish: "ejercicio", english: "exercise" },
      { id: "m28-13", spanish: "descansar", english: "to relax" },
      { id: "m28-14", spanish: "practicar", english: "to practice" },
      { id: "m28-15", spanish: "diversion", english: "fun" },
    ],
  },
  {
    id: "module-29",
    title: "Module 29",
    theme: "Communication",
    words: [
      { id: "m29-1", spanish: "mensaje", english: "message" },
      { id: "m29-2", spanish: "correo", english: "mail" },
      { id: "m29-3", spanish: "llamada", english: "call" },
      { id: "m29-4", spanish: "voz", english: "voice" },
      { id: "m29-5", spanish: "palabra", english: "word" },
      { id: "m29-6", spanish: "frase", english: "sentence" },
      { id: "m29-7", spanish: "idioma", english: "language" },
      { id: "m29-8", spanish: "espanol", english: "Spanish" },
      { id: "m29-9", spanish: "ingles", english: "English" },
      { id: "m29-10", spanish: "conversacion", english: "conversation" },
      { id: "m29-11", spanish: "voz baja", english: "quiet voice" },
      { id: "m29-12", spanish: "voz alta", english: "loud voice" },
      { id: "m29-13", spanish: "repetir", english: "to repeat" },
      { id: "m29-14", spanish: "contestar", english: "to answer" },
      { id: "m29-15", spanish: "preguntar", english: "to ask" },
    ],
  },
  {
    id: "module-30",
    title: "Module 30",
    theme: "Common Connectors",
    words: [
      { id: "m30-1", spanish: "y", english: "and" },
      { id: "m30-2", spanish: "o", english: "or" },
      { id: "m30-3", spanish: "pero", english: "but" },
      { id: "m30-4", spanish: "porque", english: "because" },
      { id: "m30-5", spanish: "con", english: "with" },
      { id: "m30-6", spanish: "sin", english: "without" },
      { id: "m30-7", spanish: "para", english: "for" },
      { id: "m30-8", spanish: "por", english: "by" },
      { id: "m30-9", spanish: "en", english: "in" },
      { id: "m30-10", spanish: "sobre", english: "on" },
      { id: "m30-11", spanish: "entre", english: "between" },
      { id: "m30-12", spanish: "antes", english: "before" },
      { id: "m30-13", spanish: "cuando", english: "when" },
      { id: "m30-14", spanish: "como", english: "like" },
      { id: "m30-15", spanish: "todo", english: "all" },
    ],
  },
  {
    id: "module-31",
    title: "Module 31",
    theme: "Kitchen",
    words: [
      { id: "m31-1", spanish: "olla", english: "pot" },
      { id: "m31-2", spanish: "sarten", english: "pan" },
      { id: "m31-3", spanish: "horno", english: "oven" },
      { id: "m31-4", spanish: "estufa", english: "stove" },
      { id: "m31-5", spanish: "nevera", english: "refrigerator" },
      { id: "m31-6", spanish: "fregadero", english: "sink" },
      { id: "m31-7", spanish: "taza", english: "cup" },
      { id: "m31-8", spanish: "servilleta", english: "napkin" },
      { id: "m31-9", spanish: "receta", english: "recipe" },
      { id: "m31-10", spanish: "aceite", english: "oil" },
      { id: "m31-11", spanish: "mantequilla", english: "butter" },
      { id: "m31-12", spanish: "harina", english: "flour" },
      { id: "m31-13", spanish: "cebolla", english: "onion" },
      { id: "m31-14", spanish: "ajo", english: "garlic" },
      { id: "m31-15", spanish: "tomate", english: "tomato" },
    ],
  },
  {
    id: "module-32",
    title: "Module 32",
    theme: "Cleaning",
    words: [
      { id: "m32-1", spanish: "limpiar casa", english: "to clean the house" },
      { id: "m32-2", spanish: "lavar platos", english: "to wash dishes" },
      { id: "m32-3", spanish: "pasar escoba", english: "to sweep with a broom" },
      { id: "m32-4", spanish: "secar", english: "to dry" },
      { id: "m32-5", spanish: "doblar ropa", english: "to fold clothes" },
      { id: "m32-6", spanish: "acomodar", english: "to arrange" },
      { id: "m32-7", spanish: "bolsa de basura", english: "trash bag" },
      { id: "m32-8", spanish: "escoba", english: "broom" },
      { id: "m32-9", spanish: "toalla", english: "towel" },
      { id: "m32-10", spanish: "cesto de ropa", english: "laundry basket" },
      { id: "m32-11", spanish: "ropa limpia", english: "clean laundry" },
      { id: "m32-12", spanish: "polvo", english: "dust" },
      { id: "m32-13", spanish: "mancha", english: "stain" },
      { id: "m32-14", spanish: "cubo", english: "bucket" },
      { id: "m32-15", spanish: "trapo", english: "rag" },
    ],
  },
  {
    id: "module-33",
    title: "Module 33",
    theme: "Bathroom",
    words: [
      { id: "m33-1", spanish: "ducha", english: "shower" },
      { id: "m33-2", spanish: "banera", english: "bathtub" },
      { id: "m33-3", spanish: "inodoro", english: "toilet" },
      { id: "m33-4", spanish: "cepillo", english: "brush" },
      { id: "m33-5", spanish: "pasta dental", english: "toothpaste" },
      { id: "m33-6", spanish: "champu", english: "shampoo" },
      { id: "m33-7", spanish: "peine", english: "comb" },
      { id: "m33-8", spanish: "afeitar", english: "to shave" },
      { id: "m33-9", spanish: "secarse", english: "to dry oneself" },
      { id: "m33-10", spanish: "lavarse", english: "to wash oneself" },
      { id: "m33-11", spanish: "diente", english: "tooth" },
      { id: "m33-12", spanish: "cara limpia", english: "clean face" },
      { id: "m33-13", spanish: "agua caliente", english: "hot water" },
      { id: "m33-14", spanish: "agua fria", english: "cold water" },
      { id: "m33-15", spanish: "papel higienico", english: "toilet paper" },
    ],
  },
  {
    id: "module-34",
    title: "Module 34",
    theme: "Workplace",
    words: [
      { id: "m34-1", spanish: "trabajo", english: "job" },
      { id: "m34-2", spanish: "jefe", english: "boss" },
      { id: "m34-3", spanish: "colega", english: "coworker" },
      { id: "m34-4", spanish: "reunion", english: "meeting" },
      { id: "m34-5", spanish: "proyecto", english: "project" },
      { id: "m34-6", spanish: "correo electronico", english: "email" },
      { id: "m34-7", spanish: "escritorio", english: "desk" },
      { id: "m34-8", spanish: "archivo", english: "file" },
      { id: "m34-9", spanish: "impresora", english: "printer" },
      { id: "m34-10", spanish: "pantalla", english: "screen" },
      { id: "m34-11", spanish: "teclado", english: "keyboard" },
      { id: "m34-12", spanish: "cursor", english: "cursor" },
      { id: "m34-13", spanish: "agenda", english: "planner" },
      { id: "m34-14", spanish: "pausa", english: "break" },
      { id: "m34-15", spanish: "turno", english: "shift" },
    ],
  },
  {
    id: "module-35",
    title: "Module 35",
    theme: "Technology",
    words: [
      { id: "m35-1", spanish: "aplicacion", english: "app" },
      { id: "m35-2", spanish: "internet", english: "internet" },
      { id: "m35-3", spanish: "contrasena", english: "password" },
      { id: "m35-4", spanish: "usuario", english: "user" },
      { id: "m35-5", spanish: "enlace", english: "link" },
      { id: "m35-6", spanish: "pagina web", english: "web page" },
      { id: "m35-7", spanish: "archivo digital", english: "digital file" },
      { id: "m35-8", spanish: "cargar", english: "to load" },
      { id: "m35-9", spanish: "descargar", english: "to download" },
      { id: "m35-10", spanish: "enviar", english: "to send" },
      { id: "m35-11", spanish: "recibir", english: "to receive" },
      { id: "m35-12", spanish: "iniciar sesion", english: "to log in" },
      { id: "m35-13", spanish: "cerrar sesion", english: "to log out" },
      { id: "m35-14", spanish: "buscar en linea", english: "to search online" },
      { id: "m35-15", spanish: "guardar archivo", english: "to save a file" },
    ],
  },
  {
    id: "module-36",
    title: "Module 36",
    theme: "Money",
    words: [
      { id: "m36-1", spanish: "valor", english: "value" },
      { id: "m36-2", spanish: "cuenta", english: "bill" },
      { id: "m36-3", spanish: "propina", english: "tip" },
      { id: "m36-4", spanish: "efectivo", english: "cash" },
      { id: "m36-5", spanish: "vuelto", english: "change" },
      { id: "m36-6", spanish: "descuento", english: "discount" },
      { id: "m36-7", spanish: "comprobante", english: "receipt" },
      { id: "m36-8", spanish: "gastar", english: "to spend" },
      { id: "m36-9", spanish: "ahorrar", english: "to save money" },
      { id: "m36-10", spanish: "pagar", english: "to pay" },
      { id: "m36-11", spanish: "costar", english: "to cost" },
      { id: "m36-12", spanish: "economico", english: "inexpensive" },
      { id: "m36-13", spanish: "costoso", english: "costly" },
      { id: "m36-14", spanish: "gratis", english: "free" },
      { id: "m36-15", spanish: "total", english: "total" },
    ],
  },
  {
    id: "module-37",
    title: "Module 37",
    theme: "Appointments",
    words: [
      { id: "m37-1", spanish: "cita", english: "appointment" },
      { id: "m37-2", spanish: "horario", english: "schedule" },
      { id: "m37-3", spanish: "calendario", english: "calendar" },
      { id: "m37-4", spanish: "disponible", english: "available" },
      { id: "m37-5", spanish: "sin tiempo", english: "short on time" },
      { id: "m37-6", spanish: "cancelar", english: "to cancel" },
      { id: "m37-7", spanish: "confirmar", english: "to confirm" },
      { id: "m37-8", spanish: "llegar", english: "to arrive" },
      { id: "m37-9", spanish: "esperar", english: "to wait" },
      { id: "m37-10", spanish: "retraso", english: "delay" },
      { id: "m37-11", spanish: "puntual", english: "on time" },
      { id: "m37-12", spanish: "recordatorio", english: "reminder" },
      { id: "m37-13", spanish: "fecha", english: "date" },
      { id: "m37-14", spanish: "plan", english: "plan" },
      { id: "m37-15", spanish: "visita", english: "visit" },
    ],
  },
  {
    id: "module-38",
    title: "Module 38",
    theme: "Directions",
    words: [
      { id: "m38-1", spanish: "norte", english: "north" },
      { id: "m38-2", spanish: "sur", english: "south" },
      { id: "m38-3", spanish: "este", english: "east" },
      { id: "m38-4", spanish: "oeste", english: "west" },
      { id: "m38-5", spanish: "a una cuadra", english: "one block away" },
      { id: "m38-6", spanish: "a distancia", english: "at a distance" },
      { id: "m38-7", spanish: "recto", english: "straight" },
      { id: "m38-8", spanish: "esquina", english: "corner" },
      { id: "m38-9", spanish: "cruce", english: "crossing" },
      { id: "m38-10", spanish: "senal", english: "sign" },
      { id: "m38-11", spanish: "puente", english: "bridge" },
      { id: "m38-12", spanish: "subir", english: "to go up" },
      { id: "m38-13", spanish: "bajar", english: "to go down" },
      { id: "m38-14", spanish: "seguir", english: "to follow" },
      { id: "m38-15", spanish: "cruzar", english: "to cross" },
    ],
  },
  {
    id: "module-39",
    title: "Module 39",
    theme: "Transportation",
    words: [
      { id: "m39-1", spanish: "taxi", english: "taxi" },
      { id: "m39-2", spanish: "metro", english: "subway" },
      { id: "m39-3", spanish: "avion", english: "airplane" },
      { id: "m39-4", spanish: "barco", english: "boat" },
      { id: "m39-5", spanish: "camion", english: "truck" },
      { id: "m39-6", spanish: "motocicleta", english: "motorcycle" },
      { id: "m39-7", spanish: "parada", english: "stop" },
      { id: "m39-8", spanish: "pasajero", english: "passenger" },
      { id: "m39-9", spanish: "conductor", english: "driver" },
      { id: "m39-10", spanish: "asiento", english: "seat" },
      { id: "m39-11", spanish: "rueda", english: "wheel" },
      { id: "m39-12", spanish: "gasolina", english: "gasoline" },
      { id: "m39-13", spanish: "trafico", english: "traffic" },
      { id: "m39-14", spanish: "licencia", english: "license" },
      { id: "m39-15", spanish: "equipaje", english: "luggage" },
    ],
  },
  {
    id: "module-40",
    title: "Module 40",
    theme: "City Services",
    words: [
      { id: "m40-1", spanish: "correo postal", english: "post office" },
      { id: "m40-2", spanish: "policia", english: "police" },
      { id: "m40-3", spanish: "bombero", english: "firefighter" },
      { id: "m40-4", spanish: "ambulancia", english: "ambulance" },
      { id: "m40-5", spanish: "ayuntamiento", english: "city hall" },
      { id: "m40-6", spanish: "farmacia cercana", english: "nearby pharmacy" },
      { id: "m40-7", spanish: "gasolinera", english: "gas station" },
      { id: "m40-8", spanish: "lavanderia", english: "laundromat" },
      { id: "m40-9", spanish: "peluqueria", english: "hair salon" },
      { id: "m40-10", spanish: "panaderia", english: "bakery" },
      { id: "m40-11", spanish: "carniceria", english: "butcher shop" },
      { id: "m40-12", spanish: "plaza", english: "town square" },
      { id: "m40-13", spanish: "museo", english: "museum" },
      { id: "m40-14", spanish: "teatro", english: "theater" },
      { id: "m40-15", spanish: "cine", english: "movie theater" },
    ],
  },
  {
    id: "module-41",
    title: "Module 41",
    theme: "Entertainment",
    words: [
      { id: "m41-1", spanish: "pasatiempo", english: "hobby" },
      { id: "m41-2", spanish: "actividad", english: "activity" },
      { id: "m41-3", spanish: "bailar salsa", english: "to dance salsa" },
      { id: "m41-4", spanish: "fiesta", english: "party" },
      { id: "m41-5", spanish: "concierto", english: "concert" },
      { id: "m41-6", spanish: "entrada de cine", english: "movie ticket" },
      { id: "m41-7", spanish: "serie", english: "series" },
      { id: "m41-8", spanish: "programa", english: "show" },
      { id: "m41-9", spanish: "radio", english: "radio" },
      { id: "m41-10", spanish: "noticia", english: "news" },
      { id: "m41-11", spanish: "revista", english: "magazine" },
      { id: "m41-12", spanish: "cuento", english: "story" },
      { id: "m41-13", spanish: "risa", english: "laugh" },
      { id: "m41-14", spanish: "entretenimiento", english: "entertainment" },
      { id: "m41-15", spanish: "tomar descanso", english: "to take a break" },
    ],
  },
  {
    id: "module-42",
    title: "Module 42",
    theme: "Exercise",
    words: [
      { id: "m42-1", spanish: "dar paseo", english: "to take a walk" },
      { id: "m42-2", spanish: "trotar", english: "to jog" },
      { id: "m42-3", spanish: "nadar", english: "to swim" },
      { id: "m42-4", spanish: "bailar", english: "to dance" },
      { id: "m42-5", spanish: "saltar", english: "to jump" },
      { id: "m42-6", spanish: "hacer deporte", english: "to play sports" },
      { id: "m42-7", spanish: "entrenar", english: "to train" },
      { id: "m42-8", spanish: "estirar", english: "to stretch" },
      { id: "m42-9", spanish: "respirar", english: "to breathe" },
      { id: "m42-10", spanish: "descansar cuerpo", english: "to rest the body" },
      { id: "m42-11", spanish: "gimnasio", english: "gym" },
      { id: "m42-12", spanish: "equipo", english: "team" },
      { id: "m42-13", spanish: "pelota", english: "ball" },
      { id: "m42-14", spanish: "cancha", english: "court" },
      { id: "m42-15", spanish: "piscina", english: "pool" },
    ],
  },
  {
    id: "module-43",
    title: "Module 43",
    theme: "Feelings",
    words: [
      { id: "m43-1", spanish: "en calma", english: "calm" },
      { id: "m43-2", spanish: "con nervios", english: "nervous" },
      { id: "m43-3", spanish: "alegre", english: "happy" },
      { id: "m43-4", spanish: "con pena", english: "sad" },
      { id: "m43-5", spanish: "enojado", english: "angry" },
      { id: "m43-6", spanish: "sin energia", english: "without energy" },
      { id: "m43-7", spanish: "preocupado", english: "worried" },
      { id: "m43-8", spanish: "con confianza", english: "confident" },
      { id: "m43-9", spanish: "confundido", english: "confused" },
      { id: "m43-10", spanish: "preparado", english: "prepared" },
      { id: "m43-11", spanish: "sin compania", english: "without company" },
      { id: "m43-12", spanish: "comodo", english: "comfortable" },
      { id: "m43-13", spanish: "aburrido", english: "bored" },
      { id: "m43-14", spanish: "emocionado", english: "excited" },
      { id: "m43-15", spanish: "relajado", english: "relaxed" },
    ],
  },
  {
    id: "module-44",
    title: "Module 44",
    theme: "Personality",
    words: [
      { id: "m44-1", spanish: "cordial", english: "kind" },
      { id: "m44-2", spanish: "serio", english: "serious" },
      { id: "m44-3", spanish: "gracioso", english: "funny" },
      { id: "m44-4", spanish: "paciente", english: "patient" },
      { id: "m44-5", spanish: "timido", english: "shy" },
      { id: "m44-6", spanish: "resistente", english: "strong" },
      { id: "m44-7", spanish: "inteligente", english: "smart" },
      { id: "m44-8", spanish: "curioso", english: "curious" },
      { id: "m44-9", spanish: "ordenado", english: "organized" },
      { id: "m44-10", spanish: "creativo", english: "creative" },
      { id: "m44-11", spanish: "generoso", english: "generous" },
      { id: "m44-12", spanish: "honesto", english: "honest" },
      { id: "m44-13", spanish: "veloz", english: "fast" },
      { id: "m44-14", spanish: "sin prisa", english: "unhurried" },
      { id: "m44-15", spanish: "cuidadoso", english: "careful" },
    ],
  },
  {
    id: "module-45",
    title: "Module 45",
    theme: "Family Events",
    words: [
      { id: "m45-1", spanish: "cumpleanos", english: "birthday" },
      { id: "m45-2", spanish: "boda", english: "wedding" },
      { id: "m45-3", spanish: "invitado", english: "guest" },
      { id: "m45-4", spanish: "invitacion", english: "invitation" },
      { id: "m45-5", spanish: "celebrar", english: "to celebrate" },
      { id: "m45-6", spanish: "regalar", english: "to give a gift" },
      { id: "m45-7", spanish: "felicitar", english: "to congratulate" },
      { id: "m45-8", spanish: "abrazo", english: "hug" },
      { id: "m45-9", spanish: "pastel", english: "cake" },
      { id: "m45-10", spanish: "vela", english: "candle" },
      { id: "m45-11", spanish: "musico", english: "musician" },
      { id: "m45-12", spanish: "mesa familiar", english: "family table" },
      { id: "m45-13", spanish: "recuerdo", english: "memory" },
      { id: "m45-14", spanish: "foto familiar", english: "family photo" },
      { id: "m45-15", spanish: "brindis", english: "toast" },
    ],
  },
  {
    id: "module-46",
    title: "Module 46",
    theme: "Weather Details",
    words: [
      { id: "m46-1", spanish: "dia caluroso", english: "hot day" },
      { id: "m46-2", spanish: "dia frio", english: "cold day" },
      { id: "m46-3", spanish: "brisa", english: "breeze" },
      { id: "m46-4", spanish: "lluvia fuerte", english: "heavy rain" },
      { id: "m46-5", spanish: "rayo", english: "lightning" },
      { id: "m46-6", spanish: "trueno", english: "thunder" },
      { id: "m46-7", spanish: "paraguas", english: "umbrella" },
      { id: "m46-8", spanish: "abrigo ligero", english: "light coat" },
      { id: "m46-9", spanish: "clima", english: "weather" },
      { id: "m46-10", spanish: "temperatura", english: "temperature" },
      { id: "m46-11", spanish: "sol fuerte", english: "strong sun" },
      { id: "m46-12", spanish: "sombra", english: "shade" },
      { id: "m46-13", spanish: "clima seco", english: "dry weather" },
      { id: "m46-14", spanish: "mojado", english: "wet" },
      { id: "m46-15", spanish: "aire fresco", english: "fresh air" },
    ],
  },
  {
    id: "module-47",
    title: "Module 47",
    theme: "Nature Details",
    words: [
      { id: "m47-1", spanish: "cielo azul", english: "blue sky" },
      { id: "m47-2", spanish: "estrella", english: "star" },
      { id: "m47-3", spanish: "luna", english: "moon" },
      { id: "m47-4", spanish: "sol de manana", english: "morning sun" },
      { id: "m47-5", spanish: "jardines", english: "gardens" },
      { id: "m47-6", spanish: "animal de casa", english: "house pet" },
      { id: "m47-7", spanish: "cachorro", english: "puppy" },
      { id: "m47-8", spanish: "minino", english: "kitty" },
      { id: "m47-9", spanish: "ave", english: "bird" },
      { id: "m47-10", spanish: "pez pequeno", english: "small fish" },
      { id: "m47-11", spanish: "hierba", english: "grass" },
      { id: "m47-12", spanish: "semilla", english: "seed" },
      { id: "m47-13", spanish: "rama", english: "branch" },
      { id: "m47-14", spanish: "camino natural", english: "nature path" },
      { id: "m47-15", spanish: "vista", english: "view" },
    ],
  },
  {
    id: "module-48",
    title: "Module 48",
    theme: "Simple Actions",
    words: [
      { id: "m48-1", spanish: "agarrar", english: "to grab" },
      { id: "m48-2", spanish: "colocar", english: "to place" },
      { id: "m48-3", spanish: "traer", english: "to bring" },
      { id: "m48-4", spanish: "llevar", english: "to carry" },
      { id: "m48-5", spanish: "dejar", english: "to leave" },
      { id: "m48-6", spanish: "observar", english: "to observe" },
      { id: "m48-7", spanish: "oir", english: "to hear" },
      { id: "m48-8", spanish: "leer texto", english: "to read text" },
      { id: "m48-9", spanish: "escribir nota", english: "to write a note" },
      { id: "m48-10", spanish: "estudiar palabra", english: "to study a word" },
      { id: "m48-11", spanish: "ensenar", english: "to teach" },
      { id: "m48-12", spanish: "recordar", english: "to remember" },
      { id: "m48-13", spanish: "olvidar", english: "to forget" },
      { id: "m48-14", spanish: "entender", english: "to understand" },
      { id: "m48-15", spanish: "probar", english: "to try" },
    ],
  },
  {
    id: "module-49",
    title: "Module 49",
    theme: "Daily Routines",
    words: [
      { id: "m49-1", spanish: "despertarse", english: "to wake up" },
      { id: "m49-2", spanish: "levantarse", english: "to get up" },
      { id: "m49-3", spanish: "vestirse", english: "to get dressed" },
      { id: "m49-4", spanish: "peinarse", english: "to comb hair" },
      { id: "m49-5", spanish: "sentarse", english: "to sit down" },
      { id: "m49-6", spanish: "acostarse", english: "to go to bed" },
      { id: "m49-7", spanish: "prepararse", english: "to get ready" },
      { id: "m49-8", spanish: "salir de casa", english: "to leave home" },
      { id: "m49-9", spanish: "volver a casa", english: "to return home" },
      { id: "m49-10", spanish: "hacer la cama", english: "to make the bed" },
      { id: "m49-11", spanish: "hacer cafe", english: "to make coffee" },
      { id: "m49-12", spanish: "tomar desayuno", english: "to eat breakfast" },
      { id: "m49-13", spanish: "preparar comida", english: "to prepare food" },
      { id: "m49-14", spanish: "mirar mensajes", english: "to check messages" },
      { id: "m49-15", spanish: "cerrar la puerta", english: "to close the door" },
    ],
  },
  {
    id: "module-50",
    title: "Module 50",
    theme: "Requests",
    words: [
      { id: "m50-1", spanish: "necesito", english: "I need" },
      { id: "m50-2", spanish: "quiero", english: "I want" },
      { id: "m50-3", spanish: "puedo", english: "I can" },
      { id: "m50-4", spanish: "tengo que", english: "I have to" },
      { id: "m50-5", spanish: "me gustaria", english: "I would like" },
      { id: "m50-6", spanish: "por supuesto", english: "of course" },
      { id: "m50-7", spanish: "un momento", english: "one moment" },
      { id: "m50-8", spanish: "otra opcion", english: "another option" },
      { id: "m50-9", spanish: "mas despacio", english: "more slowly" },
      { id: "m50-10", spanish: "mas claro", english: "more clearly" },
      { id: "m50-11", spanish: "esta bien", english: "that's fine" },
      { id: "m50-12", spanish: "no entiendo", english: "I don't understand" },
      { id: "m50-13", spanish: "me ayuda", english: "it helps me" },
      { id: "m50-14", spanish: "puede ayudarme", english: "can you help me" },
      { id: "m50-15", spanish: "donde esta", english: "where is" },
    ],
  },
  {
    id: "module-51",
    title: "Module 51",
    theme: "Small Talk",
    words: [
      { id: "m51-1", spanish: "que tal", english: "how is it going" },
      { id: "m51-2", spanish: "mucho gusto", english: "nice to meet you" },
      { id: "m51-3", spanish: "igualmente", english: "likewise" },
      { id: "m51-4", spanish: "nos vemos", english: "see you" },
      { id: "m51-5", spanish: "bienvenido", english: "welcome" },
      { id: "m51-6", spanish: "feliz dia", english: "happy day" },
      { id: "m51-7", spanish: "con permiso", english: "excuse me" },
      { id: "m51-8", spanish: "no hay problema", english: "no problem" },
      { id: "m51-9", spanish: "claro que si", english: "of course yes" },
      { id: "m51-10", spanish: "hasta manana", english: "see you tomorrow" },
      { id: "m51-11", spanish: "como estas", english: "how are you" },
      { id: "m51-12", spanish: "estoy bien", english: "I am fine" },
      { id: "m51-13", spanish: "que pasa", english: "what's happening" },
      { id: "m51-14", spanish: "buena suerte", english: "good luck" },
      { id: "m51-15", spanish: "cuidate", english: "take care" },
    ],
  },
  {
    id: "module-52",
    title: "Module 52",
    theme: "Restaurant",
    words: [
      { id: "m52-1", spanish: "menu", english: "menu" },
      { id: "m52-2", spanish: "camarero", english: "waiter" },
      { id: "m52-3", spanish: "mesa libre", english: "open table" },
      { id: "m52-4", spanish: "reserva", english: "reservation" },
      { id: "m52-5", spanish: "orden", english: "order" },
      { id: "m52-6", spanish: "plato principal", english: "main dish" },
      { id: "m52-7", spanish: "postre", english: "dessert" },
      { id: "m52-8", spanish: "bebida", english: "drink" },
      { id: "m52-9", spanish: "sin hielo", english: "without ice" },
      { id: "m52-10", spanish: "para llevar", english: "to go" },
      { id: "m52-11", spanish: "mesa para dos", english: "table for two" },
      { id: "m52-12", spanish: "la cuenta", english: "the check" },
      { id: "m52-13", spanish: "servicio", english: "service" },
      { id: "m52-14", spanish: "sabor", english: "flavor" },
      { id: "m52-15", spanish: "rico", english: "tasty" },
    ],
  },
  {
    id: "module-53",
    title: "Module 53",
    theme: "Groceries",
    words: [
      { id: "m53-1", spanish: "supermercado", english: "supermarket" },
      { id: "m53-2", spanish: "carrito", english: "cart" },
      { id: "m53-3", spanish: "pasillo", english: "aisle" },
      { id: "m53-4", spanish: "frijoles", english: "beans" },
      { id: "m53-5", spanish: "pasta", english: "pasta" },
      { id: "m53-6", spanish: "cereal", english: "cereal" },
      { id: "m53-7", spanish: "yogur", english: "yogurt" },
      { id: "m53-8", spanish: "zanahoria", english: "carrot" },
      { id: "m53-9", spanish: "lechuga", english: "lettuce" },
      { id: "m53-10", spanish: "papas", english: "potatoes" },
      { id: "m53-11", spanish: "galleta", english: "cookie" },
      { id: "m53-12", spanish: "helado", english: "ice cream" },
      { id: "m53-13", spanish: "congelado", english: "frozen" },
      { id: "m53-14", spanish: "fresco del dia", english: "fresh today" },
      { id: "m53-15", spanish: "paquete", english: "package" },
    ],
  },
  {
    id: "module-54",
    title: "Module 54",
    theme: "Housing",
    words: [
      { id: "m54-1", spanish: "apartamento", english: "apartment" },
      { id: "m54-2", spanish: "edificio", english: "building" },
      { id: "m54-3", spanish: "vecino", english: "neighbor" },
      { id: "m54-4", spanish: "alquiler", english: "rent" },
      { id: "m54-5", spanish: "dueno", english: "owner" },
      { id: "m54-6", spanish: "pasillo de casa", english: "hallway" },
      { id: "m54-7", spanish: "escalera", english: "stairs" },
      { id: "m54-8", spanish: "ascensor", english: "elevator" },
      { id: "m54-9", spanish: "balcon", english: "balcony" },
      { id: "m54-10", spanish: "garaje", english: "garage" },
      { id: "m54-11", spanish: "patio", english: "patio" },
      { id: "m54-12", spanish: "techo", english: "ceiling" },
      { id: "m54-13", spanish: "alfombra", english: "rug" },
      { id: "m54-14", spanish: "sofa", english: "sofa" },
      { id: "m54-15", spanish: "armario", english: "closet" },
    ],
  },
  {
    id: "module-55",
    title: "Module 55",
    theme: "Public Signs",
    words: [
      { id: "m55-1", spanish: "abierto", english: "open" },
      { id: "m55-2", spanish: "cerrado", english: "closed" },
      { id: "m55-3", spanish: "prohibido", english: "prohibited" },
      { id: "m55-4", spanish: "silencio", english: "silence" },
      { id: "m55-5", spanish: "empuje", english: "push" },
      { id: "m55-6", spanish: "jale", english: "pull" },
      { id: "m55-7", spanish: "entrada principal", english: "main entrance" },
      { id: "m55-8", spanish: "salida de emergencia", english: "emergency exit" },
      { id: "m55-9", spanish: "informacion", english: "information" },
      { id: "m55-10", spanish: "banos", english: "restrooms" },
      { id: "m55-11", spanish: "pare", english: "stop" },
      { id: "m55-12", spanish: "peligro", english: "danger" },
      { id: "m55-13", spanish: "despacio", english: "slowly" },
      { id: "m55-14", spanish: "solo empleados", english: "employees only" },
      { id: "m55-15", spanish: "fila", english: "line" },
    ],
  },
  {
    id: "module-56",
    title: "Module 56",
    theme: "Emergency",
    words: [
      { id: "m56-1", spanish: "emergencia", english: "emergency" },
      { id: "m56-2", spanish: "accidente", english: "accident" },
      { id: "m56-3", spanish: "seguridad", english: "safety" },
      { id: "m56-4", spanish: "ayuda urgente", english: "urgent help" },
      { id: "m56-5", spanish: "llamar", english: "to call" },
      { id: "m56-6", spanish: "cuidado urgente", english: "urgent care" },
      { id: "m56-7", spanish: "perdido", english: "lost" },
      { id: "m56-8", spanish: "robo", english: "theft" },
      { id: "m56-9", spanish: "fuego", english: "fire" },
      { id: "m56-10", spanish: "salvavidas", english: "lifeguard" },
      { id: "m56-11", spanish: "calma", english: "calmness" },
      { id: "m56-12", spanish: "herido", english: "injured" },
      { id: "m56-13", spanish: "rapidamente", english: "quickly" },
      { id: "m56-14", spanish: "direccion exacta", english: "exact address" },
      { id: "m56-15", spanish: "numero local", english: "local number" },
    ],
  },
  {
    id: "module-57",
    title: "Module 57",
    theme: "Health Visit",
    words: [
      { id: "m57-1", spanish: "sintoma", english: "symptom" },
      { id: "m57-2", spanish: "seguro medico", english: "health insurance" },
      { id: "m57-3", spanish: "enfermera", english: "nurse" },
      { id: "m57-4", spanish: "persona enferma", english: "sick person" },
      { id: "m57-5", spanish: "receta medica", english: "prescription" },
      { id: "m57-6", spanish: "pastilla", english: "pill" },
      { id: "m57-7", spanish: "jarabe", english: "syrup" },
      { id: "m57-8", spanish: "alergia", english: "allergy" },
      { id: "m57-9", spanish: "presion", english: "pressure" },
      { id: "m57-10", spanish: "temperatura corporal", english: "body temperature" },
      { id: "m57-11", spanish: "sangre", english: "blood" },
      { id: "m57-12", spanish: "respiracion", english: "breathing" },
      { id: "m57-13", spanish: "revision", english: "checkup" },
      { id: "m57-14", spanish: "dolor leve", english: "mild pain" },
      { id: "m57-15", spanish: "mejorar", english: "to improve" },
    ],
  },
  {
    id: "module-58",
    title: "Module 58",
    theme: "Mail and Packages",
    words: [
      { id: "m58-1", spanish: "oficina postal", english: "post office" },
      { id: "m58-2", spanish: "carta", english: "letter" },
      { id: "m58-3", spanish: "tarjeta postal", english: "postcard" },
      { id: "m58-4", spanish: "sello", english: "stamp" },
      { id: "m58-5", spanish: "buzon", english: "mailbox" },
      { id: "m58-6", spanish: "cartero", english: "mail carrier" },
      { id: "m58-7", spanish: "servicio postal", english: "postal service" },
      { id: "m58-8", spanish: "fila postal", english: "post office line" },
      { id: "m58-9", spanish: "direccion postal", english: "mailing address" },
      { id: "m58-10", spanish: "codigo postal", english: "zip code" },
      { id: "m58-11", spanish: "destinatario", english: "recipient" },
      { id: "m58-12", spanish: "remitente", english: "sender" },
      { id: "m58-13", spanish: "entrega", english: "delivery" },
      { id: "m58-14", spanish: "recibo postal", english: "postal receipt" },
      { id: "m58-15", spanish: "numero de seguimiento", english: "tracking number" },
    ],
  },
  {
    id: "module-59",
    title: "Module 59",
    theme: "Opinions",
    words: [
      { id: "m59-1", spanish: "creo que", english: "I think that" },
      { id: "m59-2", spanish: "me parece", english: "it seems to me" },
      { id: "m59-3", spanish: "prefiero", english: "I prefer" },
      { id: "m59-4", spanish: "me gusta", english: "I like" },
      { id: "m59-5", spanish: "no me gusta", english: "I don't like" },
      { id: "m59-6", spanish: "favorito", english: "favorite" },
      { id: "m59-7", spanish: "idea", english: "idea" },
      { id: "m59-8", spanish: "opinion", english: "opinion" },
      { id: "m59-9", spanish: "razon", english: "reason" },
      { id: "m59-10", spanish: "verdad", english: "truth" },
      { id: "m59-11", spanish: "diferente", english: "different" },
      { id: "m59-12", spanish: "igual", english: "same" },
      { id: "m59-13", spanish: "mejor", english: "better" },
      { id: "m59-14", spanish: "peor", english: "worse" },
      { id: "m59-15", spanish: "interesante", english: "interesting" },
    ],
  },
  {
    id: "module-60",
    title: "Module 60",
    theme: "Community Events",
    words: [
      { id: "m60-1", spanish: "evento", english: "event" },
      { id: "m60-2", spanish: "fiesta comunitaria", english: "community party" },
      { id: "m60-3", spanish: "reunion vecinal", english: "neighborhood meeting" },
      { id: "m60-4", spanish: "asistente", english: "attendee" },
      { id: "m60-5", spanish: "anuncio", english: "announcement" },
      { id: "m60-6", spanish: "voluntario", english: "volunteer" },
      { id: "m60-7", spanish: "vecindario", english: "neighborhood" },
      { id: "m60-8", spanish: "celebracion", english: "celebration" },
      { id: "m60-9", spanish: "horario del evento", english: "event schedule" },
      { id: "m60-10", spanish: "lugar del evento", english: "event location" },
      { id: "m60-11", spanish: "lista de invitados", english: "guest list" },
      { id: "m60-12", spanish: "organizador", english: "organizer" },
      { id: "m60-13", spanish: "publico", english: "audience" },
      { id: "m60-14", spanish: "programa del evento", english: "event program" },
      { id: "m60-15", spanish: "hora de inicio", english: "start time" },
    ],
  },
];

const feminineWords = new Set([
  "persona",
  "familia",
  "madre",
  "hija",
  "hermana",
  "abuela",
  "nina",
  "mujer",
  "comida",
  "carne",
  "fruta",
  "manzana",
  "naranja",
  "sopa",
  "ensalada",
  "verdura",
  "agua",
  "leche",
  "cuchara",
  "cena",
  "casa",
  "cocina",
  "puerta",
  "ventana",
  "mesa",
  "silla",
  "cama",
  "luz",
  "pared",
  "llave",
  "escuela",
  "tienda",
  "calle",
  "ciudad",
  "playa",
  "biblioteca",
  "oficina",
  "bicicleta",
  "maleta",
  "estacion",
  "entrada",
  "salida",
  "hora",
  "semana",
  "noche",
  "clase",
  "camiseta",
  "chaqueta",
  "falda",
  "camisa",
  "gorra",
  "lluvia",
  "nieve",
  "nube",
  "tarea",
  "pregunta",
  "respuesta",
  "silla",
  "mesa",
  "mano",
  "cabeza",
  "pierna",
  "salud",
  "medicina",
  "basura",
  "lectura",
  "pintura",
  "natacion",
  "diversion",
  "llamada",
  "voz",
  "palabra",
  "frase",
  "conversacion",
]);

const masculineWords = new Set(["dia", "mapa", "clima", "idioma", "agua"]);

function articleFor(word) {
  const firstWord = word.spanish.toLowerCase().split(" ")[0];
  if (masculineWords.has(firstWord)) return "el";
  if (feminineWords.has(firstWord)) return "la";
  if (firstWord.endsWith("a") || firstWord.endsWith("ion") || firstWord.endsWith("dad")) {
    return "la";
  }
  return "el";
}

function withArticle(word) {
  if (word.spanish.includes(" ") || word.english.startsWith("to ")) {
    return word.spanish;
  }

  return `${articleFor(word)} ${word.spanish}`;
}

function makeExample(word, moduleIndex, wordIndex, theme) {
  const item = withArticle(word);
  const englishItem = word.english;
  const isVerb = englishItem.startsWith("to ");
  const verbMeaning = englishItem.replace("to ", "");
  const themeKey = theme.toLowerCase();
  const specificVerbExamples = {
    ser: { spanish: "Quiero ser puntual para la reunion.", english: "I want to be on time for the meeting." },
    estar: { spanish: "Voy a estar cerca de la entrada.", english: "I am going to be located near the entrance." },
    tener: { spanish: "Necesito tener mi boleto antes de subir al tren.", english: "I need to have my ticket before getting on the train." },
    hacer: { spanish: "Voy a hacer la tarea despues de cenar.", english: "I am going to do the homework after dinner." },
    ir: { spanish: "Quiero ir al mercado antes de que cierre.", english: "I want to go to the market before it closes." },
    venir: { spanish: "Mi amigo va a venir a casa esta tarde.", english: "My friend is going to come to my house this afternoon." },
    ver: { spanish: "Quiero ver la direccion en el mapa.", english: "I want to see the address on the map." },
    mirar: { spanish: "Voy a mirar el horario antes de salir.", english: "I am going to look at the schedule before leaving." },
    hablar: { spanish: "Necesito hablar con la recepcionista del hotel.", english: "I need to speak with the hotel receptionist." },
    escuchar: { spanish: "En clase intento escuchar cada palabra nueva.", english: "In class, I try to listen to every new word." },
    leer: { spanish: "Antes del examen quiero leer mis notas.", english: "Before the exam, I want to read my notes." },
    escribir: { spanish: "Voy a escribir la direccion en mi cuaderno.", english: "I am going to write the address in my notebook." },
    comer: { spanish: "Prefiero comer algo ligero antes de estudiar.", english: "I prefer to eat something light before studying." },
    beber: { spanish: "Despues de caminar quiero beber agua.", english: "After walking, I want to drink water." },
    tomar: { spanish: "Voy a tomar el autobus a las ocho.", english: "I am going to take the bus at eight." },
    abrir: { spanish: "Puedes abrir la ventana un momento.", english: "You can open the window for a moment." },
    cerrar: { spanish: "Necesito cerrar la puerta antes de salir.", english: "I need to close the door before leaving." },
    dormir: { spanish: "Quiero dormir temprano esta noche.", english: "I want to sleep early tonight." },
    vivir: { spanish: "Mi prima quiere vivir cerca de la universidad.", english: "My cousin wants to live near the university." },
    trabajar: { spanish: "Voy a trabajar en la biblioteca esta tarde.", english: "I am going to work at the library this afternoon." },
    estudiar: { spanish: "Prefiero estudiar despues del almuerzo.", english: "I prefer to study after lunch." },
    aprender: { spanish: "Quiero aprender palabras utiles para viajar.", english: "I want to learn useful words for traveling." },
    buscar: { spanish: "Voy a buscar mi mochila en el cuarto.", english: "I am going to look for my backpack in the room." },
    caminar: { spanish: "Me gusta caminar al parque por la manana.", english: "I like to walk to the park in the morning." },
    correr: { spanish: "No puedo correr si llevo una maleta grande.", english: "I cannot run if I am carrying a big suitcase." },
    jugar: { spanish: "Los ninos quieren jugar despues de la escuela.", english: "The children want to play after school." },
    ayudar: { spanish: "Puedo ayudar a mi hermana con la tarea.", english: "I can help my sister with the homework." },
    usar: { spanish: "Voy a usar el mapa para encontrar la calle.", english: "I am going to use the map to find the street." },
    querer: { spanish: "Puedo querer mas tiempo para terminar.", english: "I can want more time to finish." },
    necesitar: { spanish: "Voy a necesitar una chaqueta si hace frio.", english: "I am going to need a jacket if it is cold." },
    limpiar: { spanish: "Voy a limpiar la cocina despues de cenar.", english: "I am going to clean the kitchen after dinner." },
    lavar: { spanish: "Necesito lavar los platos antes de dormir.", english: "I need to wash the plates before sleeping." },
    cocinar: { spanish: "Me gusta cocinar arroz cuando tengo tiempo.", english: "I like to cook rice when I have time." },
    ordenar: { spanish: "Voy a ordenar mi cuarto antes de estudiar.", english: "I am going to tidy my room before studying." },
    barrer: { spanish: "Necesito barrer el piso de la cocina.", english: "I need to sweep the kitchen floor." },
    sacar: { spanish: "Voy a sacar la basura despues de comer.", english: "I am going to take out the trash after eating." },
    poner: { spanish: "Puedes poner el vaso sobre la mesa.", english: "You can put the glass on the table." },
    quitar: { spanish: "Voy a quitar los platos de la mesa.", english: "I am going to remove the plates from the table." },
    guardar: { spanish: "Necesito guardar la ropa limpia en el armario.", english: "I need to save the clean clothes in the closet." },
    planchar: { spanish: "Voy a planchar la camisa para la entrevista.", english: "I am going to iron the shirt for the interview." },
    arreglar: { spanish: "Mi padre puede arreglar la silla rota.", english: "My father can fix the broken chair." },
    regar: { spanish: "Por la tarde voy a regar el jardin.", english: "In the afternoon, I am going to water the garden." },
    doblar: { spanish: "Despues de lavar, voy a doblar la ropa.", english: "After washing, I am going to fold the clothes." },
    descansar: { spanish: "Despues del trabajo quiero descansar en casa.", english: "After work, I want to relax at home." },
    practicar: { spanish: "Voy a practicar palabras nuevas antes del quiz.", english: "I am going to practice new words before the quiz." },
  };

  if (isVerb && specificVerbExamples[word.spanish]) {
    return specificVerbExamples[word.spanish];
  }

  const homeExamples = {
    casa: { spanish: "Despues del trabajo vuelvo a casa para descansar.", english: "After work, I return home to rest." },
    cuarto: { spanish: "Mi cuarto esta tranquilo por la noche.", english: "My room is quiet at night." },
    cocina: { spanish: "En la cocina preparo cafe por la manana.", english: "In the kitchen, I make coffee in the morning." },
    bano: { spanish: "El bano esta al final del pasillo.", english: "The bathroom is at the end of the hallway." },
    puerta: { spanish: "Cierro la puerta antes de salir.", english: "I close the door before leaving." },
    ventana: { spanish: "Abro la ventana para que entre aire fresco.", english: "I open the window so fresh air can come in." },
    mesa: { spanish: "Dejo el libro sobre la mesa.", english: "I leave the book on the table." },
    silla: { spanish: "Tomo una silla para sentarme con el grupo.", english: "I take a chair to sit with the group." },
    cama: { spanish: "Hago la cama despues de levantarme.", english: "I make the bed after getting up." },
    luz: { spanish: "Apago la luz antes de dormir.", english: "I turn off the lamp before sleeping." },
    pared: { spanish: "El calendario esta en la pared.", english: "The calendar is on the wall." },
    piso: { spanish: "Limpio el piso despues de cocinar.", english: "I clean the floor after cooking." },
    jardin: { spanish: "En el jardin leo cuando hace buen tiempo.", english: "In the garden, I read when the weather is nice." },
    llave: { spanish: "Guardo la llave en el bolsillo.", english: "I keep the key in my pocket." },
    reloj: { spanish: "Miro el reloj para no llegar tarde.", english: "I look at the clock so I am not late." },
  };

  if (themeKey.includes("home") && homeExamples[word.spanish]) {
    return homeExamples[word.spanish];
  }

  const weatherExamples = {
    sol: { spanish: "Hay sol, asi que camino al parque.", english: "It is sunny, so I walk to the park." },
    lluvia: { spanish: "La lluvia empieza mientras espero el autobus.", english: "The rain starts while I wait for the bus." },
    nieve: { spanish: "La nieve cubre la calle por la manana.", english: "The snow covers the street in the morning." },
    viento: { spanish: "El viento mueve las hojas del arbol.", english: "The wind moves the leaves of the tree." },
    nube: { spanish: "Una nube tapa el sol por un momento.", english: "A cloud covers the sun for a moment." },
    cielo: { spanish: "El cielo esta claro despues de la lluvia.", english: "The sky is clear after the rain." },
    calor: { spanish: "Con calor, compro agua fria.", english: "In the heat, I buy cold water." },
    frio: { spanish: "Hace frio, por eso llevo una chaqueta.", english: "It is cold, so I wear a jacket." },
    humedo: { spanish: "El aire esta humedo despues de la lluvia.", english: "The air is humid after the rain." },
    clima: { spanish: "Reviso el clima antes de elegir la ropa.", english: "I check the weather before choosing clothes." },
    tormenta: { spanish: "La tormenta retrasa mi viaje.", english: "The storm delays my trip." },
    paraguas: { spanish: "Llevo un paraguas porque puede llover.", english: "I carry an umbrella because it may rain." },
    caliente: { spanish: "El cafe esta caliente y lo tomo despacio.", english: "The coffee is hot, and I drink it slowly." },
    fresco: { spanish: "El aire fresco entra por la ventana.", english: "Fresh air comes in through the window." },
    seco: { spanish: "El piso esta seco despues de limpiar.", english: "The floor is dry after cleaning." },
    mojado: { spanish: "Mi abrigo esta mojado por la lluvia.", english: "My coat is wet from the rain." },
    llover: { spanish: "Va a llover, asi que llevo un paraguas.", english: "It is going to rain, so I bring an umbrella." },
    nevar: { spanish: "Puede nevar esta noche en la ciudad.", english: "It may snow tonight in the city." },
  };

  if (themeKey.includes("weather") && weatherExamples[word.spanish]) {
    return weatherExamples[word.spanish];
  }

  const feelingExamples = {
    feliz: { spanish: "Estoy feliz cuando termino una meta.", english: "I am happy when I finish a goal." },
    triste: { spanish: "Mi amiga esta triste despues de la mala noticia.", english: "My friend is sad after the bad news." },
    cansado: { spanish: "Estoy cansado despues de caminar mucho.", english: "I am tired after walking a lot." },
    enfermo: { spanish: "Me quedo en casa porque estoy enfermo.", english: "I stay home because I am sick." },
    tranquilo: { spanish: "Me siento tranquilo despues de respirar despacio.", english: "I feel calm after breathing slowly." },
    nervioso: { spanish: "Estoy nervioso antes del examen.", english: "I am nervous before the exam." },
    contento: { spanish: "Mi hermano esta contento con su regalo.", english: "My brother is pleased with his gift." },
    ocupado: { spanish: "Estoy ocupado durante la manana.", english: "I am busy during the morning." },
    libre: { spanish: "Estoy libre despues de las cinco.", english: "I am free after five o'clock." },
    listo: { spanish: "Estoy listo para empezar la clase.", english: "I am ready to start class." },
    seguro: { spanish: "Me siento seguro cuando conozco el camino.", english: "I feel safe when I know the way." },
    solo: { spanish: "Estoy solo en la biblioteca por la tarde.", english: "I am alone in the library in the afternoon." },
    hambriento: { spanish: "Estoy hambriento despues de caminar mucho.", english: "I am hungry after walking a lot." },
    sediento: { spanish: "Estoy sediento despues del ejercicio.", english: "I am thirsty after exercising." },
    amable: { spanish: "La cajera es amable cuando pregunto el precio.", english: "The cashier is kind when I ask the price." },
    fuerte: { spanish: "Me siento fuerte despues de descansar bien.", english: "I feel strong after resting well." },
    preocupado: { spanish: "Estoy preocupado porque perdi mi boleto.", english: "I am worried because I lost my ticket." },
    emocionado: { spanish: "Estoy emocionado por el viaje.", english: "I am excited about the trip." },
    aburrido: { spanish: "Estoy aburrido durante la espera larga.", english: "I am bored during the long wait." },
    comodo: { spanish: "Estoy comodo en esta silla.", english: "I am comfortable in this chair." },
  };

  if (themeKey.includes("feeling") && feelingExamples[word.spanish]) {
    return feelingExamples[word.spanish];
  }

  const shoppingExamples = {
    comprador: { spanish: "El comprador compara precios antes de pagar.", english: "The buyer compares prices before paying." },
    precio: { spanish: "El precio aparece en la etiqueta.", english: "The price appears on the tag." },
    barato: { spanish: "Este pan es barato y esta fresco.", english: "This bread is cheap and fresh." },
    caro: { spanish: "El hotel es caro en verano.", english: "The hotel is expensive in summer." },
    recibo: { spanish: "Guardo el recibo en mi cartera.", english: "I keep the receipt in my wallet." },
    cambio: { spanish: "La cajera me da el cambio correcto.", english: "The cashier gives me the correct change." },
    moneda: { spanish: "Encuentro una moneda en el bolsillo.", english: "I find a coin in my pocket." },
    billete: { spanish: "Pago el cafe con un billete pequeno.", english: "I pay for the coffee with a small bill." },
    vendedor: { spanish: "El vendedor explica la oferta con paciencia.", english: "The seller explains the deal patiently." },
    venta: { spanish: "La venta empieza el viernes por la manana.", english: "The sale starts on Friday morning." },
    lista: { spanish: "Reviso la lista antes de entrar al mercado.", english: "I check the list before entering the market." },
    producto: { spanish: "El producto nuevo esta cerca de la caja.", english: "The new product is near the register." },
    mercancia: { spanish: "La mercancia llega temprano a la tienda.", english: "The merchandise arrives early at the store." },
    tarjeta: { spanish: "Uso la tarjeta para comprar el boleto.", english: "I use the card to buy the ticket." },
    bolsa: { spanish: "Pongo la fruta en una bolsa.", english: "I put the fruit in a bag." },
    oferta: { spanish: "La tienda tiene una oferta de zapatos.", english: "The store has a sale on shoes." },
    talla: { spanish: "Busco una chaqueta de mi talla.", english: "I look for a jacket in my size." },
    caja: { spanish: "La caja esta cerca de la salida.", english: "The register is near the exit." },
    tienda: { spanish: "La tienda abre a las nueve.", english: "The store opens at nine." },
    mercado: { spanish: "En el mercado compro fruta fresca.", english: "At the market, I buy fresh fruit." },
  };

  if (themeKey.includes("shopping") && shoppingExamples[word.spanish]) {
    return shoppingExamples[word.spanish];
  }

  const drinkExamples = {
    agua: { spanish: "Por la manana tomo agua antes de trabajar.", english: "In the morning, I drink water before working." },
    cafe: { spanish: "Pido cafe caliente en la cafeteria.", english: "I order hot coffee at the cafe." },
    te: { spanish: "Tomo te cuando quiero descansar.", english: "I drink tea when I want to rest." },
    leche: { spanish: "Agrego leche al cafe por la manana.", english: "I add milk to coffee in the morning." },
    jugo: { spanish: "Compro jugo para el desayuno.", english: "I buy juice for breakfast." },
    vaso: { spanish: "Lleno un vaso con agua fria.", english: "I fill a glass with cold water." },
    plato: { spanish: "Pongo el plato en la mesa.", english: "I put the plate on the table." },
    cuchara: { spanish: "Uso una cuchara para comer sopa.", english: "I use a spoon to eat soup." },
    tenedor: { spanish: "Necesito un tenedor para la ensalada.", english: "I need a fork for the salad." },
    cuchillo: { spanish: "Uso el cuchillo para cortar el pan.", english: "I use the knife to cut the bread." },
    desayuno: { spanish: "El desayuno empieza con cafe y pan.", english: "Breakfast starts with coffee and bread." },
    almuerzo: { spanish: "Durante el almuerzo hablo con mis amigos.", english: "During lunch, I talk with my friends." },
    cena: { spanish: "Preparo la cena despues del trabajo.", english: "I make dinner after work." },
    azucar: { spanish: "Pongo un poco de azucar en el te.", english: "I put a little sugar in the tea." },
    sal: { spanish: "La sopa necesita un poco de sal.", english: "The soup needs a little salt." },
  };

  if (themeKey.includes("drinks") && drinkExamples[word.spanish]) {
    return drinkExamples[word.spanish];
  }

  const travelExamples = {
    coche: { spanish: "Reviso el coche antes del viaje.", english: "I check the car before the trip." },
    autobus: { spanish: "Tomo el autobus para llegar al centro.", english: "I take the bus to get downtown." },
    tren: { spanish: "El tren sale de la estacion a las ocho.", english: "The train leaves the station at eight." },
    bicicleta: { spanish: "Uso la bicicleta cuando hace buen tiempo.", english: "I use the bicycle when the weather is nice." },
    camino: { spanish: "El camino al hotel es corto.", english: "The road to the hotel is short." },
    mapa: { spanish: "Abro el mapa para encontrar la calle.", english: "I open the map to find the street." },
    viaje: { spanish: "Preparo el viaje con una lista.", english: "I prepare for the trip with a list." },
    maleta: { spanish: "Guardo la ropa en la maleta.", english: "I put the clothes in the suitcase." },
    boleto: { spanish: "Compro el boleto antes de subir al tren.", english: "I buy the ticket before getting on the train." },
    estacion: { spanish: "Espero a mi amigo en la estacion.", english: "I wait for my friend at the station." },
    aeropuerto: { spanish: "Llego al aeropuerto con tiempo.", english: "I arrive at the airport with time." },
    entrada: { spanish: "La entrada esta junto a la tienda.", english: "The entrance is next to the store." },
    salida: { spanish: "Busco la salida despues del concierto.", english: "I look for the exit after the concert." },
    izquierda: { spanish: "Giro a la izquierda despues del banco.", english: "I turn left after the bank." },
    derecha: { spanish: "La farmacia esta a la derecha.", english: "The pharmacy is on the right." },
  };

  if (themeKey.includes("travel") && travelExamples[word.spanish]) {
    return travelExamples[word.spanish];
  }

  const clothingExamples = {
    ropa: { spanish: "Elijo la ropa para manana antes de dormir.", english: "I choose tomorrow's clothes before sleeping." },
    camisa: { spanish: "Plancho la camisa para la entrevista.", english: "I iron the shirt for the interview." },
    pantalon: { spanish: "Guardo el pantalon en la maleta.", english: "I put the pants in the suitcase." },
    vestido: { spanish: "Mi hermana compra un vestido para la fiesta.", english: "My sister buys a dress for the party." },
    zapato: { spanish: "Me pongo el zapato derecho primero.", english: "I put on the right shoe first." },
    sombrero: { spanish: "Uso un sombrero cuando hace sol.", english: "I wear a hat when it is sunny." },
    abrigo: { spanish: "Llevo abrigo porque hace frio.", english: "I wear a coat because it is cold." },
    falda: { spanish: "La falda azul esta en el armario.", english: "The blue skirt is in the closet." },
    calcetin: { spanish: "Busco un calcetin limpio en el cajon.", english: "I look for a clean sock in the drawer." },
    chaqueta: { spanish: "Dejo la chaqueta sobre la silla.", english: "I leave the jacket on the chair." },
    bolsa: { spanish: "Pongo el libro en la bolsa.", english: "I put the book in the bag." },
    cinturon: { spanish: "Uso un cinturon con el pantalon.", english: "I wear a belt with the pants." },
    gafas: { spanish: "Necesito mis gafas para leer.", english: "I need my glasses to read." },
    remera: { spanish: "La remera blanca esta limpia.", english: "The white t-shirt is clean." },
    bufanda: { spanish: "Uso una bufanda cuando hay viento.", english: "I wear a scarf when it is windy." },
  };

  if (themeKey.includes("clothing") && clothingExamples[word.spanish]) {
    return clothingExamples[word.spanish];
  }

  const schoolExamples = {
    libro: { spanish: "En clase abro el libro cuando empieza la leccion.", english: "In class, I open the book when the lesson starts." },
    papel: { spanish: "Escribo mi nombre en el papel.", english: "I write my name on the paper." },
    lapiz: { spanish: "Uso el lapiz para responder la pregunta.", english: "I use the pencil to answer the question." },
    pluma: { spanish: "Guardo la pluma en la mochila.", english: "I put the pen in the backpack." },
    clase: { spanish: "La clase empieza a las nueve.", english: "Class starts at nine." },
    maestro: { spanish: "El maestro explica la palabra nueva.", english: "The teacher explains the new word." },
    estudiante: { spanish: "El estudiante hace una pregunta.", english: "The student asks a question." },
    tarea: { spanish: "Termino la tarea antes de cenar.", english: "I finish the homework before dinner." },
    pregunta: { spanish: "Tengo una pregunta para la profesora.", english: "I have a question for the teacher." },
    respuesta: { spanish: "Escribo la respuesta en mi cuaderno.", english: "I write the answer in my notebook." },
    "mesa escolar": { spanish: "La mesa escolar tiene un libro y un lapiz.", english: "The school desk has a book and a pencil." },
    pizarra: { spanish: "La profesora escribe en la pizarra.", english: "The teacher writes on the board." },
    mochila: { spanish: "Mi mochila esta debajo de la silla.", english: "My backpack is under the chair." },
    examen: { spanish: "El examen empieza despues del descanso.", english: "The test starts after the break." },
    nota: { spanish: "Recibo una buena nota en la clase.", english: "I receive a good grade in class." },
  };

  if (themeKey.includes("school") && schoolExamples[word.spanish]) {
    return schoolExamples[word.spanish];
  }

  const dailyObjectExamples = {
    telefono: { spanish: "Cargo el telefono antes de salir.", english: "I charge the phone before leaving." },
    computadora: { spanish: "Uso la computadora para estudiar.", english: "I use the computer to study." },
    dinero: { spanish: "Guardo el dinero en la cartera.", english: "I keep the money in the wallet." },
    tarjeta: { spanish: "Pago con tarjeta en la tienda.", english: "I pay with a card at the store." },
    foto: { spanish: "Miro una foto de mi familia.", english: "I look at a photo of my family." },
    musica: { spanish: "Escucho musica mientras camino.", english: "I listen to music while I walk." },
    pelicula: { spanish: "Veo una pelicula despues de cenar.", english: "I watch a movie after dinner." },
    cancion: { spanish: "La cancion suena en la radio.", english: "The song plays on the radio." },
    "mesa pequena": { spanish: "Pongo el cafe en la mesa pequena.", english: "I put the coffee on the small table." },
    botella: { spanish: "Lleno la botella con agua.", english: "I fill the bottle with water." },
    caja: { spanish: "Guardo el regalo en una caja.", english: "I put the gift in a box." },
    regalo: { spanish: "Compro un regalo para mi madre.", english: "I buy a gift for my mother." },
    papelera: { spanish: "Tiro el papel en la papelera.", english: "I throw the paper in the trash can." },
    espejo: { spanish: "Miro el espejo antes de salir.", english: "I look in the mirror before leaving." },
    jabon: { spanish: "Uso jabon para lavarme las manos.", english: "I use soap to wash my hands." },
  };

  if (themeKey.includes("object") && dailyObjectExamples[word.spanish]) {
    return dailyObjectExamples[word.spanish];
  }

  const timeExamples = {
    tiempo: { spanish: "Necesito tiempo para repasar antes del quiz.", english: "I need time to review before the quiz." },
    dia: { spanish: "Cada dia estudio un poco de vocabulario.", english: "Each day, I study a little vocabulary." },
    semana: { spanish: "Esta semana tengo mucho trabajo.", english: "This week, I have a lot of work." },
    mes: { spanish: "El proximo mes empiezo una clase nueva.", english: "Next month, I start a new class." },
    ano: { spanish: "Este ano quiero aprender mas espanol.", english: "This year, I want to learn more Spanish." },
    hora: { spanish: "La clase empieza en una hora.", english: "Class starts in an hour." },
    minuto: { spanish: "Dame un minuto para escribir la respuesta.", english: "Give me a minute to write the answer." },
    hoy: { spanish: "Hoy termino el modulo antes de cenar.", english: "Today, I finish the module before dinner." },
    manana: { spanish: "Manana voy a estudiar despues del desayuno.", english: "Tomorrow, I am going to study after breakfast." },
    ayer: { spanish: "Ayer complete dos lecciones.", english: "Yesterday, I completed two lessons." },
    ahora: { spanish: "Ahora puedo empezar la practica.", english: "Now, I can start the practice." },
    luego: { spanish: "Luego reviso las palabras dificiles.", english: "Later, I review the difficult words." },
    temprano: { spanish: "Llego temprano para encontrar asiento.", english: "I arrive early to find a seat." },
    tarde: { spanish: "Salgo tarde cuando hay mucho trafico.", english: "I leave late when there is a lot of traffic." },
    noche: { spanish: "Por la noche repaso en silencio.", english: "At night, I review quietly." },
  };

  if (themeKey.includes("time") && timeExamples[word.spanish]) {
    return timeExamples[word.spanish];
  }

  const bodyExamples = {
    cabeza: { spanish: "Me duele la cabeza despues de estudiar mucho.", english: "My head hurts after studying a lot." },
    cara: { spanish: "Me lavo la cara por la manana.", english: "I wash my face in the morning." },
    ojo: { spanish: "Cierro un ojo para leer la letra pequena.", english: "I close one eye to read the small print." },
    nariz: { spanish: "Me cubro la nariz cuando hace frio.", english: "I cover my nose when it is cold." },
    boca: { spanish: "Abro la boca para repetir la palabra.", english: "I open my mouth to repeat the word." },
    oreja: { spanish: "Me acerco la mano a la oreja para escuchar mejor.", english: "I put my hand near my ear to hear better." },
    mano: { spanish: "Levanto la mano para hacer una pregunta.", english: "I raise my hand to ask a question." },
    brazo: { spanish: "Me duele el brazo despues de cargar la maleta.", english: "My arm hurts after carrying the suitcase." },
    pie: { spanish: "Me pongo el zapato en el pie derecho.", english: "I put the shoe on my right foot." },
    pierna: { spanish: "Estiro la pierna antes de correr.", english: "I stretch my leg before running." },
    dedo: { spanish: "Uso el dedo para senalar la palabra.", english: "I use my finger to point to the word." },
    pelo: { spanish: "Me peino el pelo antes de salir.", english: "I comb my hair before leaving." },
    cuerpo: { spanish: "Mi cuerpo necesita descanso despues del ejercicio.", english: "My body needs rest after exercise." },
    corazon: { spanish: "Mi corazon late rapido cuando estoy nervioso.", english: "My heart beats fast when I am nervous." },
    espalda: { spanish: "Me duele la espalda despues de sentarme mucho.", english: "My back hurts after sitting for a long time." },
  };

  if (themeKey.includes("body") && bodyExamples[word.spanish]) {
    return bodyExamples[word.spanish];
  }

  const numberExamples = {
    uno: { spanish: "Necesito un boleto para el tren.", english: "I need one ticket for the train." },
    dos: { spanish: "Estudio dos modulos por la tarde.", english: "I study two modules in the afternoon." },
    tres: { spanish: "La mesa tiene tres vasos.", english: "The table has three glasses." },
    cuatro: { spanish: "Tengo cuatro preguntas para la profesora.", english: "I have four questions for the teacher." },
    cinco: { spanish: "Espero cinco minutos en la entrada.", english: "I wait five minutes at the entrance." },
    seis: { spanish: "La clase termina a las seis.", english: "Class ends at six." },
    siete: { spanish: "Me levanto a las siete.", english: "I get up at seven." },
    ocho: { spanish: "El autobus llega a las ocho.", english: "The bus arrives at eight." },
    nueve: { spanish: "La tienda abre a las nueve.", english: "The store opens at nine." },
    diez: { spanish: "Repito la palabra diez veces.", english: "I repeat the word ten times." },
    once: { spanish: "La reunion empieza a las once.", english: "The meeting starts at eleven." },
    doce: { spanish: "Almuerzo a las doce.", english: "I eat lunch at twelve." },
    trece: { spanish: "La pagina trece tiene el ejemplo.", english: "Page thirteen has the example." },
    catorce: { spanish: "Hay catorce estudiantes en la clase.", english: "There are fourteen students in the class." },
    quince: { spanish: "El modulo tiene quince palabras.", english: "The module has fifteen words." },
  };

  if (themeKey.includes("number") && numberExamples[word.spanish]) {
    return numberExamples[word.spanish];
  }

  const natureExamples = {
    arbol: { spanish: "Me siento bajo el arbol para leer.", english: "I sit under the tree to read." },
    flor: { spanish: "La flor crece junto a la ventana.", english: "The flower grows next to the window." },
    rio: { spanish: "El rio pasa cerca del pueblo.", english: "The river passes near the town." },
    lago: { spanish: "Caminamos alrededor del lago por la tarde.", english: "We walk around the lake in the afternoon." },
    mar: { spanish: "El mar se ve tranquilo desde el hotel.", english: "The sea looks calm from the hotel." },
    montana: { spanish: "La montana aparece al fondo de la foto.", english: "The mountain appears in the background of the photo." },
    bosque: { spanish: "El camino entra en el bosque.", english: "The path enters the forest." },
    campo: { spanish: "Mi familia pasa el domingo en el campo.", english: "My family spends Sunday in the countryside." },
    tierra: { spanish: "La tierra esta mojada despues de la lluvia.", english: "The earth is wet after the rain." },
    arena: { spanish: "La arena queda dentro de mis zapatos.", english: "The sand stays inside my shoes." },
    piedra: { spanish: "Uso una piedra para sostener el papel.", english: "I use a stone to hold the paper down." },
    hoja: { spanish: "Una hoja cae sobre el banco.", english: "A leaf falls on the bench." },
    raiz: { spanish: "La raiz del arbol cruza el camino.", english: "The root of the tree crosses the path." },
    naturaleza: { spanish: "La naturaleza me ayuda a descansar.", english: "Nature helps me rest." },
    aire: { spanish: "Abro la ventana para sentir el aire fresco.", english: "I open the window to feel the fresh air." },
  };

  if (themeKey.includes("nature") && natureExamples[word.spanish]) {
    return natureExamples[word.spanish];
  }

  const healthExamples = {
    salud: { spanish: "Cuido mi salud con descanso y agua.", english: "I take care of my health with rest and water." },
    dolor: { spanish: "Tengo dolor de cabeza despues del viaje.", english: "I have a headache after the trip." },
    medicina: { spanish: "Tomo la medicina despues del almuerzo.", english: "I take the medicine after lunch." },
    "doctor general": { spanish: "El doctor general revisa mis sintomas.", english: "The general doctor checks my symptoms." },
    clinica: { spanish: "La clinica abre temprano los lunes.", english: "The clinic opens early on Mondays." },
    fiebre: { spanish: "Con fiebre, me quedo en casa.", english: "With a fever, I stay home." },
    tos: { spanish: "La tos no me deja dormir bien.", english: "The cough does not let me sleep well." },
    descanso: { spanish: "Necesito descanso despues de una semana ocupada.", english: "I need rest after a busy week." },
    sueno: { spanish: "Tengo sueno durante la clase de la manana.", english: "I feel sleepy during the morning class." },
    herida: { spanish: "Limpio la herida con cuidado.", english: "I clean the wound carefully." },
    "ayuda medica": { spanish: "Busco ayuda medica cuando el dolor aumenta.", english: "I look for medical help when the pain increases." },
    farmacia: { spanish: "Paso por la farmacia despues del trabajo.", english: "I stop by the pharmacy after work." },
    vitamina: { spanish: "Compro una vitamina en la farmacia.", english: "I buy a vitamin at the pharmacy." },
    energia: { spanish: "Tengo mas energia despues de dormir bien.", english: "I have more energy after sleeping well." },
    cuidado: { spanish: "El cuidado diario evita problemas pequenos.", english: "Daily care prevents small problems." },
  };

  if (themeKey.includes("health") && healthExamples[word.spanish]) {
    return healthExamples[word.spanish];
  }

  const dayExamples = {
    lunes: { spanish: "El lunes estudio despues del trabajo.", english: "On Monday, I study after work." },
    martes: { spanish: "El martes tengo una llamada corta.", english: "On Tuesday, I have a short call." },
    miercoles: { spanish: "El miercoles voy a la biblioteca.", english: "On Wednesday, I go to the library." },
    jueves: { spanish: "El jueves reviso mis palabras nuevas.", english: "On Thursday, I review my new words." },
    viernes: { spanish: "El viernes ceno con mi familia.", english: "On Friday, I have dinner with my family." },
    sabado: { spanish: "El sabado camino por el parque.", english: "On Saturday, I walk through the park." },
    domingo: { spanish: "El domingo preparo la semana.", english: "On Sunday, I prepare for the week." },
    "manana temprano": { spanish: "Manana temprano tomo el autobus.", english: "Tomorrow morning, I take the bus." },
    mediodia: { spanish: "Al mediodia hago una pausa para comer.", english: "At noon, I take a break to eat." },
    medianoche: { spanish: "A medianoche la casa esta tranquila.", english: "At midnight, the house is quiet." },
    "fin de semana": { spanish: "El fin de semana practico con mas calma.", english: "On the weekend, I practice more calmly." },
    diario: { spanish: "Hago un repaso diario de vocabulario.", english: "I do a daily vocabulary review." },
    "cada dia": { spanish: "Cada dia aprendo algunas palabras nuevas.", english: "Each day, I learn some new words." },
    pronto: { spanish: "Pronto voy a empezar el siguiente modulo.", english: "Soon, I am going to start the next module." },
    despues: { spanish: "Despues reviso las respuestas incorrectas.", english: "Afterward, I review the incorrect answers." },
  };

  if (themeKey.includes("day") && dayExamples[word.spanish]) {
    return dayExamples[word.spanish];
  }

  const monthExamples = {
    enero: { spanish: "En enero empiezo una rutina nueva.", english: "In January, I start a new routine." },
    febrero: { spanish: "En febrero hace frio en mi ciudad.", english: "In February, it is cold in my city." },
    marzo: { spanish: "En marzo camino mas por la tarde.", english: "In March, I walk more in the afternoon." },
    abril: { spanish: "En abril llueve muchos dias.", english: "In April, it rains many days." },
    mayo: { spanish: "En mayo visito a mi familia.", english: "In May, I visit my family." },
    junio: { spanish: "En junio termino la primera parte del curso.", english: "In June, I finish the first part of the course." },
    julio: { spanish: "En julio viajo con una maleta pequena.", english: "In July, I travel with a small suitcase." },
    agosto: { spanish: "En agosto estudio por la manana.", english: "In August, I study in the morning." },
    septiembre: { spanish: "En septiembre vuelven las clases.", english: "In September, classes return." },
    octubre: { spanish: "En octubre compro una chaqueta nueva.", english: "In October, I buy a new jacket." },
    noviembre: { spanish: "En noviembre preparo planes para viajar.", english: "In November, I prepare plans to travel." },
    diciembre: { spanish: "En diciembre escribo mensajes a mis amigos.", english: "In December, I write messages to my friends." },
    "estacion del ano": { spanish: "La primavera es mi estacion del ano favorita.", english: "Spring is my favorite season." },
    primavera: { spanish: "En primavera abro la ventana por la tarde.", english: "In spring, I open the window in the afternoon." },
    verano: { spanish: "En verano tomo agua fria todos los dias.", english: "In summer, I drink cold water every day." },
  };

  if (themeKey.includes("month") && monthExamples[word.spanish]) {
    return monthExamples[word.spanish];
  }

  const colorExamples = {
    rojo: { spanish: "Marco la fecha importante con color rojo.", english: "I mark the important date with red." },
    azul: { spanish: "El cuaderno azul esta en mi mochila.", english: "The blue notebook is in my backpack." },
    verde: { spanish: "La luz verde indica que puedo pasar.", english: "The green light shows that I can pass." },
    amarillo: { spanish: "Uso una nota amarilla para recordar la tarea.", english: "I use a yellow note to remember the homework." },
    negro: { spanish: "El bolso negro combina con mis zapatos.", english: "The black bag matches my shoes." },
    blanco: { spanish: "Escribo mi nombre en la hoja blanca.", english: "I write my name on the white sheet." },
    gris: { spanish: "El cielo esta gris antes de la lluvia.", english: "The sky is gray before the rain." },
    rosa: { spanish: "La carpeta rosa es para la clase de espanol.", english: "The pink folder is for Spanish class." },
    morado: { spanish: "El marcador morado esta sobre la mesa.", english: "The purple marker is on the table." },
    marron: { spanish: "La silla marron queda junto a la ventana.", english: "The brown chair is next to the window." },
    claro: { spanish: "Prefiero un color claro para leer mejor.", english: "I prefer a light color to read better." },
    oscuro: { spanish: "El pasillo esta oscuro por la noche.", english: "The hallway is dark at night." },
    color: { spanish: "El color de la mochila me ayuda a reconocerla.", english: "The color of the backpack helps me recognize it." },
    dorado: { spanish: "La etiqueta dorada marca el regalo.", english: "The gold tag marks the gift." },
    plateado: { spanish: "El reloj plateado esta en la mesa.", english: "The silver watch is on the table." },
  };

  if (themeKey.includes("colors") && colorExamples[word.spanish]) {
    return colorExamples[word.spanish];
  }

  const descriptionExamples = {
    grande: { spanish: "La maleta grande no cabe bajo la cama.", english: "The big suitcase does not fit under the bed." },
    pequeno: { spanish: "Uso un cuaderno pequeno para vocabulario.", english: "I use a small notebook for vocabulary." },
    alto: { spanish: "El edificio alto esta cerca del parque.", english: "The tall building is near the park." },
    bajo: { spanish: "El estante bajo es facil de alcanzar.", english: "The low shelf is easy to reach." },
    bueno: { spanish: "Este plan es bueno para ahorrar tiempo.", english: "This plan is good for saving time." },
    malo: { spanish: "El cafe frio tiene mal sabor.", english: "The cold coffee has a bad taste." },
    nuevo: { spanish: "Compro un boligrafo nuevo para la clase.", english: "I buy a new pen for class." },
    viejo: { spanish: "El mapa viejo no muestra la estacion nueva.", english: "The old map does not show the new station." },
    bonito: { spanish: "El jardin bonito esta detras de la casa.", english: "The pretty garden is behind the house." },
    feo: { spanish: "El dibujo feo me hace reir.", english: "The ugly drawing makes me laugh." },
    facil: { spanish: "La pregunta facil aparece primero.", english: "The easy question appears first." },
    dificil: { spanish: "La palabra dificil necesita mas practica.", english: "The difficult word needs more practice." },
    rapido: { spanish: "El tren rapido llega antes del autobus.", english: "The fast train arrives before the bus." },
    lento: { spanish: "El ascensor lento tarda mucho.", english: "The slow elevator takes a long time." },
    importante: { spanish: "Guardo el documento importante en mi mochila.", english: "I keep the important document in my backpack." },
  };

  if (themeKey.includes("descriptions") && descriptionExamples[word.spanish]) {
    return descriptionExamples[word.spanish];
  }

  const animalExamples = {
    perro: { spanish: "El perro espera junto a la puerta.", english: "The dog waits by the door." },
    gato: { spanish: "El gato duerme sobre la silla.", english: "The cat sleeps on the chair." },
    pajaro: { spanish: "Un pajaro canta cerca de la ventana.", english: "A bird sings near the window." },
    pez: { spanish: "El pez nada en un recipiente pequeno.", english: "The fish swims in a small bowl." },
    caballo: { spanish: "El caballo camina despacio por el campo.", english: "The horse walks slowly through the field." },
    vaca: { spanish: "La vaca esta cerca de la cerca.", english: "The cow is near the fence." },
    cerdo: { spanish: "El cerdo aparece en el dibujo del nino.", english: "The pig appears in the child's drawing." },
    oveja: { spanish: "La oveja come pasto en la granja.", english: "The sheep eats grass on the farm." },
    "pollo animal": { spanish: "El pollo camina detras de la casa.", english: "The chicken walks behind the house." },
    pato: { spanish: "El pato nada en el lago.", english: "The duck swims in the lake." },
    raton: { spanish: "El raton corre bajo la mesa.", english: "The mouse runs under the table." },
    conejo: { spanish: "El conejo salta en el jardin.", english: "The rabbit jumps in the garden." },
    animal: { spanish: "El animal necesita agua fresca.", english: "The animal needs fresh water." },
    mascota: { spanish: "Mi mascota espera comida por la tarde.", english: "My pet waits for food in the afternoon." },
    mono: { spanish: "El mono toma una fruta con la mano.", english: "The monkey takes a fruit with its hand." },
    granja: { spanish: "La granja esta fuera del pueblo.", english: "The farm is outside the town." },
  };

  if (themeKey.includes("animal") && animalExamples[word.spanish]) {
    return animalExamples[word.spanish];
  }

  const pick = (frames) => {
    const frame = frames[wordIndex % frames.length];
    return frame();
  };

  const nounFrames = [
    () => ({
      spanish: `Antes de salir, reviso ${item} para no olvidar nada.`,
      english: `Before leaving, I check the ${englishItem} so I do not forget anything.`,
    }),
    () => ({
      spanish: `En la mesa hay ${item} junto a mis cosas.`,
      english: `On the table, there is the ${englishItem} next to my things.`,
    }),
    () => ({
      spanish: `Le pregunto a mi amigo por ${item} durante la conversacion.`,
      english: `I ask my friend about the ${englishItem} during the conversation.`,
    }),
    () => ({
      spanish: `Guardo ${item} en un lugar facil de encontrar.`,
      english: `I keep the ${englishItem} in a place that is easy to find.`,
    }),
    () => ({
      spanish: `Veo ${item} cuando entro en la habitacion.`,
      english: `I see the ${englishItem} when I enter the room.`,
    }),
  ];

  const verbFrames = [
    () => ({
      spanish: `Hoy necesito ${word.spanish} con calma para hacerlo bien.`,
      english: `Today I need ${verbMeaning} calmly so I can do it well.`,
    }),
    () => ({
      spanish: `Despues de clase quiero ${word.spanish} un poco mas.`,
      english: `After class, I want ${verbMeaning} a little more.`,
    }),
    () => ({
      spanish: `Cuando tengo tiempo, puedo ${word.spanish} sin prisa.`,
      english: `When I have time, I can ${verbMeaning} without rushing.`,
    }),
    () => ({
      spanish: `En casa intento ${word.spanish} antes de descansar.`,
      english: `At home, I try ${verbMeaning} before resting.`,
    }),
    () => ({
      spanish: `Para mejorar, es bueno ${word.spanish} todos los dias.`,
      english: `To improve, it is good ${verbMeaning} every day.`,
    }),
  ];

  const chooseExpanded = (frames) => frames[wordIndex % frames.length]();

  if (themeKey.includes("greeting")) {
    return chooseExpanded([
      () => ({ spanish: `Al entrar en la panaderia digo "${word.spanish}" con una sonrisa.`, english: `When I enter the bakery, I say "${englishItem}" with a smile.` }),
      () => ({ spanish: `Antes de cerrar el chat, escribo "${word.spanish}".`, english: `Before closing the chat, I write "${englishItem}".` }),
      () => ({ spanish: `En una llamada rapida, uso "${word.spanish}" para sonar amable.`, english: `On a quick call, I use "${englishItem}" to sound polite.` }),
      () => ({ spanish: `La profesora dice "${word.spanish}" cuando empieza la clase.`, english: `The teacher says "${englishItem}" when class begins.` }),
      () => ({ spanish: `Cuando alguien me ayuda con la puerta, respondo "${word.spanish}".`, english: `When someone helps me with the door, I answer "${englishItem}".` }),
      () => ({ spanish: `En el pasillo escucho "${word.spanish}" y me detengo un momento.`, english: `In the hallway, I hear "${englishItem}" and stop for a moment.` }),
      () => ({ spanish: `Para pedir la cuenta, empiezo con "${word.spanish}".`, english: `To ask for the bill, I start with "${englishItem}".` }),
      () => ({ spanish: `Mi vecino levanta la mano y dice "${word.spanish}".`, english: `My neighbor raises his hand and says "${englishItem}".` }),
      () => ({ spanish: `En la recepcion del hotel, practico "${word.spanish}".`, english: `At the hotel desk, I practice "${englishItem}".` }),
      () => ({ spanish: `El mensaje termina con "${word.spanish}" antes de mi nombre.`, english: `The message ends with "${englishItem}" before my name.` }),
      () => ({ spanish: `Cuando salgo de la tienda, digo "${word.spanish}" al cajero.`, english: `When I leave the store, I say "${englishItem}" to the cashier.` }),
      () => ({ spanish: `Si interrumpo a alguien, uso "${word.spanish}" primero.`, english: `If I interrupt someone, I use "${englishItem}" first.` }),
      () => ({ spanish: `En una conversacion formal, "${word.spanish}" suena correcto.`, english: `In a formal conversation, "${englishItem}" sounds right.` }),
      () => ({ spanish: `Mi amiga responde "${word.spanish}" despues de recibir el favor.`, english: `My friend answers "${englishItem}" after receiving the favor.` }),
      () => ({ spanish: `Al despedirme de la clase, digo "${word.spanish}".`, english: `When saying goodbye to the class, I say "${englishItem}".` }),
    ]);
  }

  if (themeKey.includes("people")) {
    return chooseExpanded([
      () => ({ spanish: `En la foto aparece ${item} cerca de la puerta.`, english: `In the photo, the ${englishItem} appears near the door.` }),
      () => ({ spanish: `Invito a mi ${word.spanish} a cenar el sabado.`, english: `I invite my ${englishItem} to dinner on Saturday.` }),
      () => ({ spanish: `Durante la fiesta, ${item} saluda a todos.`, english: `During the party, the ${englishItem} greets everyone.` }),
      () => ({ spanish: `En el parque, ${item} espera junto al banco.`, english: `At the park, the ${englishItem} waits by the bench.` }),
      () => ({ spanish: `Mi familia pregunta por ${item} antes del viaje.`, english: `My family asks about the ${englishItem} before the trip.` }),
      () => ({ spanish: `En la escuela, ${item} busca su mochila.`, english: `At school, the ${englishItem} looks for a backpack.` }),
      () => ({ spanish: `El domingo llamo a mi ${word.spanish} por telefono.`, english: `On Sunday, I call my ${englishItem} on the phone.` }),
      () => ({ spanish: `En la mesa, ${item} cuenta una historia corta.`, english: `At the table, the ${englishItem} tells a short story.` }),
      () => ({ spanish: `Mi vecino ayuda a ${item} con las bolsas.`, english: `My neighbor helps the ${englishItem} with the bags.` }),
      () => ({ spanish: `En el hospital, ${item} habla con la doctora.`, english: `At the hospital, the ${englishItem} talks with the doctor.` }),
      () => ({ spanish: `Busco a mi ${word.spanish} despues de clase.`, english: `I look for my ${englishItem} after class.` }),
      () => ({ spanish: `En la reunion, ${item} toma notas.`, english: `At the meeting, the ${englishItem} takes notes.` }),
      () => ({ spanish: `La carta es para mi ${word.spanish}.`, english: `The letter is for my ${englishItem}.` }),
      () => ({ spanish: `En el mercado, ${item} compra fruta.`, english: `At the market, the ${englishItem} buys fruit.` }),
      () => ({ spanish: `Cuando llego tarde, aviso a mi ${word.spanish}.`, english: `When I am late, I tell my ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("food")) {
    return chooseExpanded([
      () => ({ spanish: `Compro ${word.spanish} para preparar la cena.`, english: `I buy ${englishItem} to make dinner.` }),
      () => ({ spanish: `En el restaurante pido ${word.spanish} porque tengo hambre.`, english: `At the restaurant, I order ${englishItem} because I am hungry.` }),
      () => ({ spanish: `Pongo ${word.spanish} en la mesa para compartir.`, english: `I put ${englishItem} on the table to share.` }),
      () => ({ spanish: `Mi companero trae ${word.spanish} para el almuerzo.`, english: `My classmate brings ${englishItem} for lunch.` }),
      () => ({ spanish: `Guardo ${word.spanish} en la cocina despues de comprarlo.`, english: `I put ${englishItem} in the kitchen after buying it.` }),
      () => ({ spanish: `La receta necesita ${word.spanish} y un poco de sal.`, english: `The recipe needs ${englishItem} and a little salt.` }),
      () => ({ spanish: `En el mercado comparo ${word.spanish} antes de pagar.`, english: `At the market, I compare ${englishItem} before paying.` }),
      () => ({ spanish: `Para el picnic llevo ${word.spanish} en una bolsa.`, english: `For the picnic, I carry ${englishItem} in a bag.` }),
      () => ({ spanish: `La cafeteria sirve ${word.spanish} al mediodia.`, english: `The cafeteria serves ${englishItem} at noon.` }),
      () => ({ spanish: `Corto ${word.spanish} en partes pequenas.`, english: `I cut ${englishItem} into small pieces.` }),
      () => ({ spanish: `Mi madre pregunta si falta ${word.spanish}.`, english: `My mother asks if ${englishItem} is missing.` }),
      () => ({ spanish: `Despues de entrenar, prefiero ${word.spanish}.`, english: `After exercising, I prefer ${englishItem}.` }),
      () => ({ spanish: `El plato tiene ${word.spanish} al lado del arroz.`, english: `The plate has ${englishItem} next to the rice.` }),
      () => ({ spanish: `Si tengo prisa, preparo ${word.spanish} rapidamente.`, english: `If I am in a hurry, I prepare ${englishItem} quickly.` }),
      () => ({ spanish: `En casa compartimos ${word.spanish} durante la cena.`, english: `At home, we share ${englishItem} during dinner.` }),
    ]);
  }

  if (themeKey.includes("drinks")) {
    return chooseExpanded([
      () => ({ spanish: `Por la manana tomo ${word.spanish} antes de trabajar.`, english: `In the morning, I have ${englishItem} before working.` }),
      () => ({ spanish: `El camarero pone ${item} al lado del plato.`, english: `The waiter puts the ${englishItem} next to the plate.` }),
      () => ({ spanish: `En la cena paso ${item} a mi amigo.`, english: `At dinner, I pass the ${englishItem} to my friend.` }),
      () => ({ spanish: `En la cocina falta ${item}, asi que voy a buscarlo.`, english: `In the kitchen, the ${englishItem} is missing, so I go look for it.` }),
      () => ({ spanish: `Despues de comer, lavo ${item} en el fregadero.`, english: `After eating, I wash the ${englishItem} in the sink.` }),
      () => ({ spanish: `Pido ${word.spanish} sin azucar en la cafeteria.`, english: `I order ${englishItem} without sugar at the cafe.` }),
      () => ({ spanish: `Mi hermano llena ${item} antes de salir.`, english: `My brother fills the ${englishItem} before leaving.` }),
      () => ({ spanish: `La mesa ya tiene ${item} para cada persona.`, english: `The table already has the ${englishItem} for each person.` }),
      () => ({ spanish: `Para el desayuno preparo ${word.spanish} caliente.`, english: `For breakfast, I prepare hot ${englishItem}.` }),
      () => ({ spanish: `La receta dice que agregue ${word.spanish} despacio.`, english: `The recipe says to add ${englishItem} slowly.` }),
      () => ({ spanish: `Si hace calor, compro ${word.spanish} frio.`, english: `If it is hot, I buy cold ${englishItem}.` }),
      () => ({ spanish: `El nino deja ${item} junto al fregadero.`, english: `The boy leaves the ${englishItem} by the sink.` }),
      () => ({ spanish: `Antes de servir, limpio ${item}.`, english: `Before serving, I clean the ${englishItem}.` }),
      () => ({ spanish: `La sopa necesita menos ${word.spanish}.`, english: `The soup needs less ${englishItem}.` }),
      () => ({ spanish: `En la bolsa llevo ${item} para el picnic.`, english: `In the bag, I carry the ${englishItem} for the picnic.` }),
    ]);
  }

  if (themeKey.includes("home") || themeKey.includes("object")) {
    return chooseExpanded([
      () => ({ spanish: `Al llegar a casa, dejo ${item} cerca de la entrada.`, english: `When I get home, I leave the ${englishItem} near the entrance.` }),
      () => ({ spanish: `Por la noche limpio ${item} antes de descansar.`, english: `At night, I clean the ${englishItem} before resting.` }),
      () => ({ spanish: `Mi hermano busca ${item} porque no lo encuentra.`, english: `My brother looks for the ${englishItem} because he cannot find it.` }),
      () => ({ spanish: `Abro ${item} para que entre aire fresco.`, english: `I open the ${englishItem} so fresh air can come in.` }),
      () => ({ spanish: `En mi apartamento, ${item} esta cerca de la ventana.`, english: `In my apartment, the ${englishItem} is near the window.` }),
      () => ({ spanish: `Antes de estudiar, muevo ${item} a otro lugar.`, english: `Before studying, I move the ${englishItem} to another place.` }),
      () => ({ spanish: `La visita deja ${item} sobre la mesa.`, english: `The visitor leaves the ${englishItem} on the table.` }),
      () => ({ spanish: `Cuando limpio el cuarto, encuentro ${item}.`, english: `When I clean the room, I find the ${englishItem}.` }),
      () => ({ spanish: `Necesito ${item} para terminar una tarea pequena.`, english: `I need the ${englishItem} to finish a small task.` }),
      () => ({ spanish: `El nino senala ${item} y pregunta por su nombre.`, english: `The child points to the ${englishItem} and asks for its name.` }),
      () => ({ spanish: `Guardo ${item} antes de salir de casa.`, english: `I put away the ${englishItem} before leaving home.` }),
      () => ({ spanish: `La luz de la tarde cae sobre ${item}.`, english: `The afternoon light falls on the ${englishItem}.` }),
      () => ({ spanish: `Si hay visitas, reviso que ${item} este limpio.`, english: `If guests are coming, I check that the ${englishItem} is clean.` }),
      () => ({ spanish: `Pongo ${item} junto a mi mochila.`, english: `I put the ${englishItem} next to my backpack.` }),
      () => ({ spanish: `Al final del dia, uso ${item} sin pensarlo mucho.`, english: `At the end of the day, I use the ${englishItem} without thinking much about it.` }),
    ]);
  }

  if (themeKey.includes("places")) {
    return chooseExpanded([
      () => ({ spanish: `Despues de clase camino hasta ${item}.`, english: `After class, I walk to the ${englishItem}.` }),
      () => ({ spanish: `Mi amigo me espera en ${item}.`, english: `My friend waits for me at the ${englishItem}.` }),
      () => ({ spanish: `Busco ${item} en el mapa antes de salir.`, english: `I look for the ${englishItem} on the map before leaving.` }),
      () => ({ spanish: `En vacaciones quiero visitar ${item}.`, english: `On vacation, I want to visit the ${englishItem}.` }),
      () => ({ spanish: `La reunion empieza cerca de ${item}.`, english: `The meeting starts near the ${englishItem}.` }),
      () => ({ spanish: `El autobus para frente a ${item}.`, english: `The bus stops in front of the ${englishItem}.` }),
      () => ({ spanish: `En ${item} compro algo pequeno para comer.`, english: `At the ${englishItem}, I buy something small to eat.` }),
      () => ({ spanish: `La direccion dice que ${item} queda a la derecha.`, english: `The address says the ${englishItem} is on the right.` }),
      () => ({ spanish: `Mi familia toma fotos en ${item}.`, english: `My family takes photos at the ${englishItem}.` }),
      () => ({ spanish: `Cuando llueve, espero dentro de ${item}.`, english: `When it rains, I wait inside the ${englishItem}.` }),
      () => ({ spanish: `La entrada de ${item} esta abierta.`, english: `The entrance to the ${englishItem} is open.` }),
      () => ({ spanish: `En ${item} practico una pregunta sencilla.`, english: `At the ${englishItem}, I practice a simple question.` }),
      () => ({ spanish: `El taxi llega rapido a ${item}.`, english: `The taxi gets to the ${englishItem} quickly.` }),
      () => ({ spanish: `Cerca de ${item} hay una cafeteria pequena.`, english: `Near the ${englishItem}, there is a small cafe.` }),
      () => ({ spanish: `Antes del viaje, marco ${item} en mi telefono.`, english: `Before the trip, I mark the ${englishItem} on my phone.` }),
    ]);
  }

  if (themeKey.includes("travel")) {
    return chooseExpanded([
      () => ({ spanish: `Antes del viaje reviso ${item} dos veces.`, english: `Before the trip, I check the ${englishItem} twice.` }),
      () => ({ spanish: `Para llegar al hotel, sigo ${item}.`, english: `To get to the hotel, I follow the ${englishItem}.` }),
      () => ({ spanish: `En la estacion busco ${item} correcto.`, english: `At the station, I look for the correct ${englishItem}.` }),
      () => ({ spanish: `Cuando llueve, prefiero tomar ${item}.`, english: `When it rains, I prefer to take the ${englishItem}.` }),
      () => ({ spanish: `Mi maleta queda junto a ${item} durante la espera.`, english: `My suitcase stays next to the ${englishItem} during the wait.` }),
      () => ({ spanish: `El conductor pregunta por ${item} antes de salir.`, english: `The driver asks about the ${englishItem} before leaving.` }),
      () => ({ spanish: `Guardo ${item} en el bolsillo de la chaqueta.`, english: `I keep the ${englishItem} in my jacket pocket.` }),
      () => ({ spanish: `El camino hacia ${item} es corto.`, english: `The road toward the ${englishItem} is short.` }),
      () => ({ spanish: `En el aeropuerto, muestro ${item} rapidamente.`, english: `At the airport, I show the ${englishItem} quickly.` }),
      () => ({ spanish: `Si pierdo ${item}, pido ayuda.`, english: `If I lose the ${englishItem}, I ask for help.` }),
      () => ({ spanish: `El viaje empieza en ${item}.`, english: `The trip starts at the ${englishItem}.` }),
      () => ({ spanish: `La entrada esta cerca de ${item}.`, english: `The entrance is near the ${englishItem}.` }),
      () => ({ spanish: `Miro la salida antes de bajar de ${item}.`, english: `I look at the exit before getting off the ${englishItem}.` }),
      () => ({ spanish: `Giro a la ${word.spanish} despues del banco.`, english: `I turn ${englishItem} after the bank.` }),
      () => ({ spanish: `La senal indica ${word.spanish} con una flecha.`, english: `The sign shows ${englishItem} with an arrow.` }),
    ]);
  }

  if (themeKey.includes("time") || themeKey.includes("day") || themeKey.includes("month")) {
    return chooseExpanded([
      () => ({ spanish: `Marco ${word.spanish} en mi calendario.`, english: `I mark ${englishItem} on my calendar.` }),
      () => ({ spanish: `La cita es ${word.spanish}, asi que salgo pronto.`, english: `The appointment is ${englishItem}, so I leave soon.` }),
      () => ({ spanish: `Mi clase empieza ${word.spanish} y no quiero llegar tarde.`, english: `My class starts ${englishItem}, and I do not want to be late.` }),
      () => ({ spanish: `Planeo estudiar en ${word.spanish}.`, english: `I plan to study in ${englishItem}.` }),
      () => ({ spanish: `El mensaje llega ${word.spanish}.`, english: `The message arrives ${englishItem}.` }),
      () => ({ spanish: `Reservo tiempo para caminar el ${word.spanish}.`, english: `I set aside time to walk on ${englishItem}.` }),
      () => ({ spanish: `Antes de ${word.spanish}, termino la tarea.`, english: `Before ${englishItem}, I finish the homework.` }),
      () => ({ spanish: `Mi familia visita en ${word.spanish}.`, english: `My family visits in ${englishItem}.` }),
      () => ({ spanish: `El tren sale a la ${word.spanish} indicada.`, english: `The train leaves at the indicated ${englishItem}.` }),
      () => ({ spanish: `Reviso el plan de ${word.spanish} con mi amigo.`, english: `I review the plan for ${englishItem} with my friend.` }),
      () => ({ spanish: `${word.spanish} tengo una llamada corta.`, english: `${englishItem}, I have a short call.` }),
      () => ({ spanish: `El horario cambia despues de ${word.spanish}.`, english: `The schedule changes after ${englishItem}.` }),
      () => ({ spanish: `En ${word.spanish}, el clima puede cambiar.`, english: `In ${englishItem}, the weather can change.` }),
      () => ({ spanish: `Para ${word.spanish}, necesito preparar la mochila.`, english: `For ${englishItem}, I need to prepare my backpack.` }),
      () => ({ spanish: `Despues de ${word.spanish}, descanso un poco.`, english: `After ${englishItem}, I rest a little.` }),
    ]);
  }

  if (themeKey.includes("colors")) {
    return chooseExpanded([
      () => ({ spanish: `Marco la fecha con el color ${word.spanish}.`, english: `I mark the date with the color ${englishItem}.` }),
      () => ({ spanish: `El dibujo necesita un tono ${word.spanish}.`, english: `The drawing needs a ${englishItem} tone.` }),
      () => ({ spanish: `En la tienda busco una carpeta de color ${word.spanish}.`, english: `At the store, I look for a folder in the color ${englishItem}.` }),
      () => ({ spanish: `La etiqueta ${word.spanish} indica mi grupo.`, english: `The ${englishItem} label shows my group.` }),
      () => ({ spanish: `El cartel usa ${word.spanish} para llamar la atencion.`, english: `The sign uses ${englishItem} to get attention.` }),
      () => ({ spanish: `Pinto una linea ${word.spanish} en el mapa.`, english: `I draw a ${englishItem} line on the map.` }),
      () => ({ spanish: `Mi cuaderno tiene una portada ${word.spanish}.`, english: `My notebook has a ${englishItem} cover.` }),
      () => ({ spanish: `Para separar temas, uso ${word.spanish}.`, english: `To separate topics, I use ${englishItem}.` }),
      () => ({ spanish: `La luz parece ${word.spanish} al atardecer.`, english: `The light looks ${englishItem} at sunset.` }),
      () => ({ spanish: `El menu muestra el precio en ${word.spanish}.`, english: `The menu shows the price in ${englishItem}.` }),
      () => ({ spanish: `Elijo ${word.spanish} porque se ve claro.`, english: `I choose ${englishItem} because it looks clear.` }),
      () => ({ spanish: `La bolsa ${word.spanish} es facil de reconocer.`, english: `The ${englishItem} bag is easy to recognize.` }),
      () => ({ spanish: `Escribo la respuesta con lapiz ${word.spanish}.`, english: `I write the answer with a ${englishItem} pencil.` }),
      () => ({ spanish: `El borde ${word.spanish} rodea la tarjeta.`, english: `The ${englishItem} border surrounds the card.` }),
      () => ({ spanish: `En la foto, el cielo parece ${word.spanish}.`, english: `In the photo, the sky looks ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("descriptions") || themeKey.includes("feeling")) {
    return chooseExpanded([
      () => ({ spanish: `El ejercicio parece ${word.spanish}, pero puedo hacerlo.`, english: `The exercise seems ${englishItem}, but I can do it.` }),
      () => ({ spanish: `Mi amigo esta ${word.spanish} despues de la llamada.`, english: `My friend is ${englishItem} after the call.` }),
      () => ({ spanish: `Este lugar se siente ${word.spanish} para estudiar.`, english: `This place feels ${englishItem} for studying.` }),
      () => ({ spanish: `El camino parece ${word.spanish} desde aqui.`, english: `The road seems ${englishItem} from here.` }),
      () => ({ spanish: `La noticia me deja ${word.spanish} por un momento.`, english: `The news leaves me ${englishItem} for a moment.` }),
      () => ({ spanish: `Cuando descanso bien, estoy ${word.spanish}.`, english: `When I rest well, I am ${englishItem}.` }),
      () => ({ spanish: `El plan es ${word.spanish} si salimos temprano.`, english: `The plan is ${englishItem} if we leave early.` }),
      () => ({ spanish: `La respuesta parece ${word.spanish} en el examen.`, english: `The answer seems ${englishItem} on the exam.` }),
      () => ({ spanish: `Despues de esperar, me siento ${word.spanish}.`, english: `After waiting, I feel ${englishItem}.` }),
      () => ({ spanish: `El cuarto queda ${word.spanish} despues de limpiar.`, english: `The room looks ${englishItem} after cleaning.` }),
      () => ({ spanish: `La conversacion se vuelve ${word.spanish}.`, english: `The conversation becomes ${englishItem}.` }),
      () => ({ spanish: `Con buenas noticias, todos estan ${word.spanish}.`, english: `With good news, everyone is ${englishItem}.` }),
      () => ({ spanish: `El ejemplo es ${word.spanish} para principiantes.`, english: `The example is ${englishItem} for beginners.` }),
      () => ({ spanish: `Cuando tengo prisa, parezco ${word.spanish}.`, english: `When I am in a hurry, I seem ${englishItem}.` }),
      () => ({ spanish: `La clase termina con un ambiente ${word.spanish}.`, english: `The class ends with a ${englishItem} mood.` }),
    ]);
  }

  if (themeKey.includes("body")) {
    return chooseExpanded([
      () => ({ spanish: `Despues de correr, me duele ${item}.`, english: `After running, my ${englishItem} hurts.` }),
      () => ({ spanish: `En la cita medica, el doctor revisa ${item}.`, english: `At the medical appointment, the doctor checks the ${englishItem}.` }),
      () => ({ spanish: `Uso ${item} para senalar la respuesta.`, english: `I use the ${englishItem} to point to the answer.` }),
      () => ({ spanish: `Cuando hace frio, cubro ${item}.`, english: `When it is cold, I cover the ${englishItem}.` }),
      () => ({ spanish: `Durante el ejercicio, muevo ${item} con cuidado.`, english: `During exercise, I move the ${englishItem} carefully.` }),
      () => ({ spanish: `Me lavo ${item} antes de comer.`, english: `I wash the ${englishItem} before eating.` }),
      () => ({ spanish: `La enfermera pregunta si siento dolor en ${item}.`, english: `The nurse asks if I feel pain in the ${englishItem}.` }),
      () => ({ spanish: `En la foto, ${item} aparece cerca de la cara.`, english: `In the photo, the ${englishItem} appears near the face.` }),
      () => ({ spanish: `Despues de escribir mucho, descanso ${item}.`, english: `After writing a lot, I rest the ${englishItem}.` }),
      () => ({ spanish: `Para bailar, necesito mover ${item} al ritmo.`, english: `To dance, I need to move the ${englishItem} to the rhythm.` }),
      () => ({ spanish: `Si camino mucho, siento cansancio en ${item}.`, english: `If I walk a lot, I feel tiredness in the ${englishItem}.` }),
      () => ({ spanish: `El entrenador dice que cuide ${item}.`, english: `The trainer says to take care of the ${englishItem}.` }),
      () => ({ spanish: `En invierno, protejo ${item} del frio.`, english: `In winter, I protect the ${englishItem} from the cold.` }),
      () => ({ spanish: `Cuando leo, apoyo ${item} sobre la mesa.`, english: `When I read, I rest the ${englishItem} on the table.` }),
      () => ({ spanish: `Antes de dormir, relajo ${item}.`, english: `Before sleeping, I relax the ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("clothing")) {
    return chooseExpanded([
      () => ({ spanish: `Por la manana elijo ${item} para ir a clase.`, english: `In the morning, I choose the ${englishItem} to go to class.` }),
      () => ({ spanish: `Si hace frio, llevo ${item}.`, english: `If it is cold, I wear the ${englishItem}.` }),
      () => ({ spanish: `Pongo ${item} en la maleta antes del viaje.`, english: `I put the ${englishItem} in the suitcase before the trip.` }),
      () => ({ spanish: `En la tienda busco ${item} de mi talla.`, english: `At the store, I look for the ${englishItem} in my size.` }),
      () => ({ spanish: `Despues de lavar ropa, guardo ${item} en el armario.`, english: `After doing laundry, I put the ${englishItem} in the closet.` }),
      () => ({ spanish: `La lluvia moja ${item} camino al autobus.`, english: `The rain gets the ${englishItem} wet on the way to the bus.` }),
      () => ({ spanish: `Para la entrevista preparo ${item} limpio.`, english: `For the interview, I prepare a clean ${englishItem}.` }),
      () => ({ spanish: `Mi amiga me presta ${item} para la fiesta.`, english: `My friend lends me the ${englishItem} for the party.` }),
      () => ({ spanish: `Doblo ${item} antes de ponerlo en la mochila.`, english: `I fold the ${englishItem} before putting it in the backpack.` }),
      () => ({ spanish: `El color de ${item} combina con mis zapatos.`, english: `The color of the ${englishItem} matches my shoes.` }),
      () => ({ spanish: `Si hace sol, uso ${item}.`, english: `If it is sunny, I use the ${englishItem}.` }),
      () => ({ spanish: `En el gimnasio cambio ${item} despues de correr.`, english: `At the gym, I change the ${englishItem} after running.` }),
      () => ({ spanish: `Busco ${item} porque la oficina esta fria.`, english: `I look for the ${englishItem} because the office is cold.` }),
      () => ({ spanish: `La tienda tiene ${item} cerca de la entrada.`, english: `The store has the ${englishItem} near the entrance.` }),
      () => ({ spanish: `Antes de salir, reviso si llevo ${item}.`, english: `Before leaving, I check if I am wearing the ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("weather")) {
    return chooseExpanded([
      () => ({ spanish: `Antes de salir reviso ${item} en el telefono.`, english: `Before leaving, I check the ${englishItem} on my phone.` }),
      () => ({ spanish: `Por ${item}, llevo una chaqueta.`, english: `Because of the ${englishItem}, I bring a jacket.` }),
      () => ({ spanish: `Desde la ventana veo ${item} sobre la calle.`, english: `From the window, I see the ${englishItem} over the street.` }),
      () => ({ spanish: `El viaje cambia cuando hay ${item}.`, english: `The trip changes when there is ${englishItem}.` }),
      () => ({ spanish: `Hablo de ${item} con mi vecino en la manana.`, english: `I talk about the ${englishItem} with my neighbor in the morning.` }),
      () => ({ spanish: `La clase termina temprano por ${item}.`, english: `Class ends early because of the ${englishItem}.` }),
      () => ({ spanish: `Si aparece ${item}, busco un paraguas.`, english: `If the ${englishItem} appears, I look for an umbrella.` }),
      () => ({ spanish: `El parque se ve diferente con ${item}.`, english: `The park looks different with the ${englishItem}.` }),
      () => ({ spanish: `Durante ${item}, prefiero quedarme en casa.`, english: `During the ${englishItem}, I prefer to stay home.` }),
      () => ({ spanish: `La noticia habla de ${item} para manana.`, english: `The news talks about the ${englishItem} for tomorrow.` }),
      () => ({ spanish: `El autobus tarda mas cuando hay ${item}.`, english: `The bus takes longer when there is ${englishItem}.` }),
      () => ({ spanish: `Miro ${item} antes de decidir la ropa.`, english: `I look at the ${englishItem} before deciding what to wear.` }),
      () => ({ spanish: `Con ${item}, la calle queda vacia.`, english: `With the ${englishItem}, the street becomes empty.` }),
      () => ({ spanish: `Mi plan cambia por culpa de ${item}.`, english: `My plan changes because of the ${englishItem}.` }),
      () => ({ spanish: `Despues de ${item}, salgo a caminar.`, english: `After the ${englishItem}, I go out for a walk.` }),
    ]);
  }

  if (themeKey.includes("school")) {
    return chooseExpanded([
      () => ({ spanish: `En clase abro ${item} cuando empieza la leccion.`, english: `In class, I open the ${englishItem} when the lesson starts.` }),
      () => ({ spanish: `El profesor revisa ${item} al final del dia.`, english: `The teacher checks the ${englishItem} at the end of the day.` }),
      () => ({ spanish: `Uso ${item} para responder la pregunta.`, english: `I use the ${englishItem} to answer the question.` }),
      () => ({ spanish: `Guardo ${item} en la mochila despues de clase.`, english: `I put the ${englishItem} in my backpack after class.` }),
      () => ({ spanish: `Mi companero comparte ${item} conmigo.`, english: `My classmate shares the ${englishItem} with me.` }),
      () => ({ spanish: `La maestra escribe ${item} en la pizarra.`, english: `The teacher writes the ${englishItem} on the board.` }),
      () => ({ spanish: `Antes del examen, leo ${item} otra vez.`, english: `Before the exam, I read the ${englishItem} again.` }),
      () => ({ spanish: `En la biblioteca busco ${item} para estudiar.`, english: `In the library, I look for the ${englishItem} to study.` }),
      () => ({ spanish: `El grupo entrega ${item} antes de salir.`, english: `The group turns in the ${englishItem} before leaving.` }),
      () => ({ spanish: `Cuando no entiendo, hago ${item}.`, english: `When I do not understand, I ask the ${englishItem}.` }),
      () => ({ spanish: `La respuesta correcta esta en ${item}.`, english: `The correct answer is in the ${englishItem}.` }),
      () => ({ spanish: `El escritorio tiene ${item} y un lapiz.`, english: `The desk has the ${englishItem} and a pencil.` }),
      () => ({ spanish: `Practico ${item} con mi tutor.`, english: `I practice the ${englishItem} with my tutor.` }),
      () => ({ spanish: `Despues de clase, reviso ${item} en casa.`, english: `After class, I review the ${englishItem} at home.` }),
      () => ({ spanish: `La actividad empieza con ${item}.`, english: `The activity starts with the ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("number")) {
    return chooseExpanded([
      () => ({ spanish: `Necesito ${word.spanish} boletos para el grupo.`, english: `I need ${englishItem} tickets for the group.` }),
      () => ({ spanish: `En la lista marco el numero ${word.spanish}.`, english: `On the list, I mark the number ${englishItem}.` }),
      () => ({ spanish: `La mesa tiene espacio para ${word.spanish} personas.`, english: `The table has room for ${englishItem} people.` }),
      () => ({ spanish: `Repito ${word.spanish} veces la palabra nueva.`, english: `I repeat the new word ${englishItem} times.` }),
      () => ({ spanish: `Compro ${word.spanish} cosas pequenas en la tienda.`, english: `I buy ${englishItem} small things at the store.` }),
      () => ({ spanish: `El ascensor sube al piso ${word.spanish}.`, english: `The elevator goes up to floor ${englishItem}.` }),
      () => ({ spanish: `Guardo ${word.spanish} monedas en el bolsillo.`, english: `I keep ${englishItem} coins in my pocket.` }),
      () => ({ spanish: `La clase empieza en ${word.spanish} minutos.`, english: `Class starts in ${englishItem} minutes.` }),
      () => ({ spanish: `El camarero trae ${word.spanish} vasos.`, english: `The waiter brings ${englishItem} glasses.` }),
      () => ({ spanish: `Tengo ${word.spanish} preguntas para la profesora.`, english: `I have ${englishItem} questions for the teacher.` }),
      () => ({ spanish: `La familia reserva una mesa para ${word.spanish}.`, english: `The family reserves a table for ${englishItem}.` }),
      () => ({ spanish: `El hotel tiene ${word.spanish} habitaciones libres.`, english: `The hotel has ${englishItem} free rooms.` }),
      () => ({ spanish: `Escribo ${word.spanish} en el formulario.`, english: `I write ${englishItem} on the form.` }),
      () => ({ spanish: `El autobus llega a las ${word.spanish}.`, english: `The bus arrives at ${englishItem}.` }),
      () => ({ spanish: `Necesito esperar ${word.spanish} turnos.`, english: `I need to wait ${englishItem} turns.` }),
    ]);
  }

  if (themeKey.includes("animal")) {
    return chooseExpanded([
      () => ({ spanish: `En el parque veo ${item} cerca del camino.`, english: `At the park, I see the ${englishItem} near the path.` }),
      () => ({ spanish: `Mi vecino cuida ${item} cuando viaja su familia.`, english: `My neighbor watches the ${englishItem} when his family travels.` }),
      () => ({ spanish: `En el libro aparece ${item} en una historia corta.`, english: `In the book, the ${englishItem} appears in a short story.` }),
      () => ({ spanish: `El nino dibuja ${item} para la tarea.`, english: `The boy draws the ${englishItem} for homework.` }),
      () => ({ spanish: `Durante el paseo escucho ${item} a lo lejos.`, english: `During the walk, I hear the ${englishItem} far away.` }),
      () => ({ spanish: `En la granja, ${item} camina junto a la cerca.`, english: `On the farm, the ${englishItem} walks by the fence.` }),
      () => ({ spanish: `La foto de ${item} esta en mi cuaderno.`, english: `The photo of the ${englishItem} is in my notebook.` }),
      () => ({ spanish: `Mi hermana pregunta si ${item} tiene hambre.`, english: `My sister asks if the ${englishItem} is hungry.` }),
      () => ({ spanish: `En el jardin aparece ${item} por la manana.`, english: `In the garden, the ${englishItem} appears in the morning.` }),
      () => ({ spanish: `El guia senala ${item} durante la visita.`, english: `The guide points out the ${englishItem} during the visit.` }),
      () => ({ spanish: `Al cruzar la calle, espero a ${item}.`, english: `When crossing the street, I wait for the ${englishItem}.` }),
      () => ({ spanish: `En una pelicula, ${item} salva al protagonista.`, english: `In a movie, the ${englishItem} saves the main character.` }),
      () => ({ spanish: `El sonido de ${item} viene del patio.`, english: `The sound of the ${englishItem} comes from the patio.` }),
      () => ({ spanish: `Mi primo quiere aprender sobre ${item}.`, english: `My cousin wants to learn about the ${englishItem}.` }),
      () => ({ spanish: `En el dibujo, ${item} esta bajo un arbol.`, english: `In the drawing, the ${englishItem} is under a tree.` }),
    ]);
  }

  if (themeKey.includes("nature")) {
    return chooseExpanded([
      () => ({ spanish: `Durante el paseo observo ${item} con calma.`, english: `During the walk, I observe the ${englishItem} calmly.` }),
      () => ({ spanish: `La foto muestra ${item} al fondo.`, english: `The photo shows the ${englishItem} in the background.` }),
      () => ({ spanish: `Cerca de casa hay ${item} muy bonito.`, english: `Near my house, there is a very pretty ${englishItem}.` }),
      () => ({ spanish: `En vacaciones quiero caminar junto a ${item}.`, english: `On vacation, I want to walk next to the ${englishItem}.` }),
      () => ({ spanish: `Despues de la lluvia, miro ${item} desde la ventana.`, english: `After the rain, I look at the ${englishItem} from the window.` }),
      () => ({ spanish: `El mapa marca ${item} cerca del pueblo.`, english: `The map marks the ${englishItem} near the town.` }),
      () => ({ spanish: `Mi familia descansa al lado de ${item}.`, english: `My family rests next to the ${englishItem}.` }),
      () => ({ spanish: `El aire cerca de ${item} se siente fresco.`, english: `The air near the ${englishItem} feels fresh.` }),
      () => ({ spanish: `En la manana, ${item} cambia de color.`, english: `In the morning, the ${englishItem} changes color.` }),
      () => ({ spanish: `Llevo agua cuando camino hacia ${item}.`, english: `I bring water when I walk toward the ${englishItem}.` }),
      () => ({ spanish: `La clase habla de ${item} en ciencias.`, english: `The class talks about the ${englishItem} in science.` }),
      () => ({ spanish: `El camino termina cerca de ${item}.`, english: `The path ends near the ${englishItem}.` }),
      () => ({ spanish: `Desde el hotel se ve ${item}.`, english: `From the hotel, you can see the ${englishItem}.` }),
      () => ({ spanish: `El nino recoge una hoja cerca de ${item}.`, english: `The child picks up a leaf near the ${englishItem}.` }),
      () => ({ spanish: `Antes de anochecer, dejamos ${item} atras.`, english: `Before nightfall, we leave the ${englishItem} behind.` }),
    ]);
  }

  if (themeKey.includes("shopping")) {
    return chooseExpanded([
      () => ({ spanish: `En la tienda pregunto por ${item} antes de pagar.`, english: `At the store, I ask about the ${englishItem} before paying.` }),
      () => ({ spanish: `El recibo muestra ${item} al final.`, english: `The receipt shows the ${englishItem} at the end.` }),
      () => ({ spanish: `Comparo ${item} con cuidado antes de comprar.`, english: `I compare the ${englishItem} carefully before buying.` }),
      () => ({ spanish: `La cajera guarda ${item} en una bolsa.`, english: `The cashier puts the ${englishItem} in a bag.` }),
      () => ({ spanish: `Busco ${item} porque esta en oferta.`, english: `I look for the ${englishItem} because it is on sale.` }),
      () => ({ spanish: `Antes de salir, reviso ${item} en mi lista.`, english: `Before leaving, I check the ${englishItem} on my list.` }),
      () => ({ spanish: `El precio de ${item} cambia los viernes.`, english: `The price of the ${englishItem} changes on Fridays.` }),
      () => ({ spanish: `Pido ayuda para encontrar ${item}.`, english: `I ask for help finding the ${englishItem}.` }),
      () => ({ spanish: `La bolsa con ${item} queda pesada.`, english: `The bag with the ${englishItem} becomes heavy.` }),
      () => ({ spanish: `En el mercado, ${item} esta junto a la entrada.`, english: `At the market, the ${englishItem} is next to the entrance.` }),
      () => ({ spanish: `Si tengo poco dinero, no compro ${item}.`, english: `If I have little money, I do not buy the ${englishItem}.` }),
      () => ({ spanish: `Mi amigo me recomienda ${item}.`, english: `My friend recommends the ${englishItem}.` }),
      () => ({ spanish: `En casa saco ${item} de la bolsa.`, english: `At home, I take the ${englishItem} out of the bag.` }),
      () => ({ spanish: `El vendedor explica como usar ${item}.`, english: `The seller explains how to use the ${englishItem}.` }),
      () => ({ spanish: `Guardo ${item} para cambiarlo manana.`, english: `I keep the ${englishItem} to exchange it tomorrow.` }),
    ]);
  }

  if (themeKey.includes("health")) {
    return chooseExpanded([
      () => ({ spanish: `Cuando no me siento bien, reviso ${item} con cuidado.`, english: `When I do not feel well, I check the ${englishItem} carefully.` }),
      () => ({ spanish: `En la farmacia compro ${item} para mi casa.`, english: `At the pharmacy, I buy the ${englishItem} for my house.` }),
      () => ({ spanish: `El doctor pregunta por ${item} durante la visita.`, english: `The doctor asks about the ${englishItem} during the visit.` }),
      () => ({ spanish: `Despues de caminar, necesito cuidar ${item}.`, english: `After walking, I need to care for the ${englishItem}.` }),
      () => ({ spanish: `Mi familia habla de ${item} en la cena.`, english: `My family talks about the ${englishItem} at dinner.` }),
      () => ({ spanish: `La enfermera escribe ${item} en el formulario.`, english: `The nurse writes the ${englishItem} on the form.` }),
      () => ({ spanish: `Guardo ${item} en el bano por la noche.`, english: `I keep the ${englishItem} in the bathroom at night.` }),
      () => ({ spanish: `Si tengo fiebre, busco ${item}.`, english: `If I have a fever, I look for the ${englishItem}.` }),
      () => ({ spanish: `La cita empieza con una pregunta sobre ${item}.`, english: `The appointment starts with a question about the ${englishItem}.` }),
      () => ({ spanish: `Antes de viajar, reviso ${item}.`, english: `Before traveling, I check the ${englishItem}.` }),
      () => ({ spanish: `El dolor cambia cuando uso ${item}.`, english: `The pain changes when I use the ${englishItem}.` }),
      () => ({ spanish: `Mi amigo necesita ${item} despues del ejercicio.`, english: `My friend needs the ${englishItem} after exercise.` }),
      () => ({ spanish: `El botiquin tiene ${item} y vendas.`, english: `The first-aid kit has the ${englishItem} and bandages.` }),
      () => ({ spanish: `La doctora recomienda descanso y ${item}.`, english: `The doctor recommends rest and the ${englishItem}.` }),
      () => ({ spanish: `En la app anoto informacion sobre ${item}.`, english: `In the app, I write down information about the ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("hobbies")) {
    return isVerb
      ? specificVerbExamples[word.spanish] || chooseExpanded(verbFrames)
      : chooseExpanded([
          () => ({ spanish: `Despues del trabajo disfruto ${item} para descansar.`, english: `After work, I enjoy the ${englishItem} to relax.` }),
          () => ({ spanish: `El sabado practico ${item} con mis amigos.`, english: `On Saturday, I practice the ${englishItem} with my friends.` }),
          () => ({ spanish: `En mi tiempo libre elijo ${item}.`, english: `In my free time, I choose the ${englishItem}.` }),
          () => ({ spanish: `Aprendo ${item} mirando videos cortos.`, english: `I learn the ${englishItem} by watching short videos.` }),
          () => ({ spanish: `La clase de ${word.spanish} empieza a las seis.`, english: `The ${englishItem} class starts at six.` }),
          () => ({ spanish: `Mi amigo trae equipo para ${item}.`, english: `My friend brings equipment for the ${englishItem}.` }),
          () => ({ spanish: `El club organiza ${item} cada jueves.`, english: `The club organizes the ${englishItem} every Thursday.` }),
          () => ({ spanish: `Practico ${item} cuando quiero relajarme.`, english: `I practice the ${englishItem} when I want to relax.` }),
          () => ({ spanish: `La musica ayuda durante ${item}.`, english: `Music helps during the ${englishItem}.` }),
          () => ({ spanish: `En casa preparo espacio para ${item}.`, english: `At home, I make space for the ${englishItem}.` }),
          () => ({ spanish: `El parque es perfecto para ${item}.`, english: `The park is perfect for the ${englishItem}.` }),
          () => ({ spanish: `Cuando llueve, prefiero ${item} dentro de casa.`, english: `When it rains, I prefer the ${englishItem} indoors.` }),
          () => ({ spanish: `Antes de empezar ${item}, tomo agua.`, english: `Before starting the ${englishItem}, I drink water.` }),
          () => ({ spanish: `Mi primo quiere mejorar en ${item}.`, english: `My cousin wants to improve at the ${englishItem}.` }),
          () => ({ spanish: `El fin de semana termina con ${item}.`, english: `The weekend ends with the ${englishItem}.` }),
        ]);
  }

  if (themeKey.includes("chore")) {
    return isVerb
      ? specificVerbExamples[word.spanish] || chooseExpanded(verbFrames)
      : chooseExpanded([
          () => ({ spanish: `Despues de cenar saco ${item}.`, english: `After dinner, I take out the ${englishItem}.` }),
          () => ({ spanish: `Los domingos separo ${item} antes de lavar.`, english: `On Sundays, I sort the ${englishItem} before washing.` }),
          () => ({ spanish: `Mi hermano ayuda con ${item} por la tarde.`, english: `My brother helps with the ${englishItem} in the afternoon.` }),
          () => ({ spanish: `Anoto ${item} en la lista de tareas.`, english: `I write the ${englishItem} on the chore list.` }),
          () => ({ spanish: `Antes de descansar, termino con ${item}.`, english: `Before resting, I finish with the ${englishItem}.` }),
          () => ({ spanish: `El apartamento huele mejor sin ${item}.`, english: `The apartment smells better without the ${englishItem}.` }),
          () => ({ spanish: `Guardo ${item} en una bolsa grande.`, english: `I put the ${englishItem} in a big bag.` }),
          () => ({ spanish: `La familia decide quien recoge ${item}.`, english: `The family decides who picks up the ${englishItem}.` }),
          () => ({ spanish: `Si espero mucho, ${item} ocupa todo el cuarto.`, english: `If I wait too long, the ${englishItem} takes up the whole room.` }),
          () => ({ spanish: `El sabado llevo ${item} al lavadero.`, english: `On Saturday, I take the ${englishItem} to the laundry room.` }),
          () => ({ spanish: `Despues de limpiar, no queda ${item}.`, english: `After cleaning, no ${englishItem} is left.` }),
          () => ({ spanish: `En la cocina pongo ${item} junto a la puerta.`, english: `In the kitchen, I put the ${englishItem} by the door.` }),
          () => ({ spanish: `El calendario recuerda revisar ${item}.`, english: `The calendar reminds me to check the ${englishItem}.` }),
          () => ({ spanish: `Mi companero baja ${item} antes de dormir.`, english: `My roommate takes the ${englishItem} downstairs before sleeping.` }),
          () => ({ spanish: `Termino rapido cuando preparo ${item} primero.`, english: `I finish quickly when I prepare the ${englishItem} first.` }),
        ]);
  }

  if (themeKey.includes("connector")) {
    const connectorExamples = {
      y: { spanish: "Compro pan y leche para la cena.", english: "I buy bread and milk for dinner." },
      o: { spanish: "Podemos estudiar ahora o despues de comer.", english: "We can study now or after eating." },
      pero: { spanish: "Quiero salir, pero necesito terminar la tarea.", english: "I want to go out, but I need to finish the homework." },
      porque: { spanish: "Me quedo en casa porque llueve mucho.", english: "I stay home because it is raining a lot." },
      con: { spanish: "Voy al mercado con mi hermano.", english: "I go to the market with my brother." },
      sin: { spanish: "Tomo cafe sin azucar.", english: "I drink coffee without sugar." },
      para: { spanish: "Guardo dinero para el viaje.", english: "I save money for the trip." },
      por: { spanish: "Camino por el parque despues de clase.", english: "I walk through the park after class." },
      a: { spanish: "Llego a la escuela temprano.", english: "I arrive at school early." },
      de: { spanish: "La mochila de mi amigo esta aqui.", english: "My friend's backpack is here." },
      en: { spanish: "Estudio en la biblioteca los lunes.", english: "I study in the library on Mondays." },
      sobre: { spanish: "El libro esta sobre la mesa.", english: "The book is on the table." },
      entre: { spanish: "La farmacia esta entre el banco y la tienda.", english: "The pharmacy is between the bank and the store." },
      antes: { spanish: "Me lavo las manos antes de comer.", english: "I wash my hands before eating." },
      despues: { spanish: "Descanso despues de trabajar.", english: "I rest after working." },
      cuando: { spanish: "Te llamo cuando llego al hotel.", english: "I call you when I arrive at the hotel." },
      como: { spanish: "Uso la silla como mesa pequena.", english: "I use the chair like a small table." },
      todo: { spanish: "Leo todo el mensaje antes de responder.", english: "I read all the message before answering." },
    };
    return connectorExamples[word.spanish];
  }

  if (themeKey.includes("greeting")) {
    return pick([
      () => ({
        spanish: `Al entrar en la tienda digo "${word.spanish}" al cajero.`,
        english: `When I enter the store, I say "${englishItem}" to the cashier.`,
      }),
      () => ({
        spanish: `En un mensaje corto escribo "${word.spanish}" antes de salir.`,
        english: `In a short message, I write "${englishItem}" before leaving.`,
      }),
      () => ({
        spanish: `Durante una llamada uso "${word.spanish}" para ser amable.`,
        english: `During a call, I use "${englishItem}" to be polite.`,
      }),
      () => ({
        spanish: `En la escuela escucho "${word.spanish}" al final de la clase.`,
        english: `At school, I hear "${englishItem}" at the end of class.`,
      }),
      () => ({
        spanish: `Cuando alguien me ayuda, respondo con "${word.spanish}".`,
        english: `When someone helps me, I respond with "${englishItem}".`,
      }),
    ]);
  }

  if (themeKey.includes("people")) {
    return pick([
      () => ({
        spanish: `En la foto aparece ${item} con una sonrisa.`,
        english: `In the photo, the ${englishItem} appears with a smile.`,
      }),
      () => ({
        spanish: `El sabado visito a mi ${word.spanish} para cenar.`,
        english: `On Saturday, I visit my ${englishItem} for dinner.`,
      }),
      () => ({
        spanish: `Durante la fiesta, ${item} habla con todos.`,
        english: `During the party, the ${englishItem} talks with everyone.`,
      }),
      () => ({
        spanish: `En el parque, ${item} espera cerca de la entrada.`,
        english: `At the park, the ${englishItem} waits near the entrance.`,
      }),
      () => ({
        spanish: `Mi familia pregunta por ${item} antes del viaje.`,
        english: `My family asks about the ${englishItem} before the trip.`,
      }),
    ]);
  }

  if (themeKey.includes("food")) {
    return pick([
      () => ({ spanish: `Compro ${word.spanish} para preparar la cena.`, english: `I buy ${englishItem} to make dinner.` }),
      () => ({ spanish: `En el restaurante pido ${word.spanish} porque tengo hambre.`, english: `At the restaurant, I order ${englishItem} because I am hungry.` }),
      () => ({ spanish: `Pongo ${word.spanish} en la mesa para compartir.`, english: `I put ${englishItem} on the table to share.` }),
      () => ({ spanish: `Mi amigo trae ${word.spanish} para el almuerzo.`, english: `My friend brings ${englishItem} for lunch.` }),
      () => ({ spanish: `Guardo ${word.spanish} en la cocina despues de comprarlo.`, english: `I put ${englishItem} in the kitchen after buying it.` }),
    ]);
  }

  if (themeKey.includes("drinks")) {
    return pick([
      () => ({ spanish: `Por la manana tomo ${word.spanish} antes de trabajar.`, english: `In the morning, I have ${englishItem} before working.` }),
      () => ({ spanish: `El camarero pone ${item} al lado del plato.`, english: `The waiter puts the ${englishItem} next to the plate.` }),
      () => ({ spanish: `En la cena paso ${item} a mi amigo.`, english: `At dinner, I pass the ${englishItem} to my friend.` }),
      () => ({ spanish: `En la cocina falta ${item}, asi que voy a buscarlo.`, english: `In the kitchen, the ${englishItem} is missing, so I go look for it.` }),
      () => ({ spanish: `Despues de comer, lavo ${item} en el fregadero.`, english: `After eating, I wash the ${englishItem} in the sink.` }),
    ]);
  }

  if (themeKey.includes("home")) {
    return pick([
      () => ({ spanish: `Al llegar a casa, dejo las llaves cerca de ${item}.`, english: `When I get home, I leave the keys near the ${englishItem}.` }),
      () => ({ spanish: `Por la noche limpio ${item} antes de descansar.`, english: `At night, I clean the ${englishItem} before resting.` }),
      () => ({ spanish: `Mi hermano busca ${item} porque no lo encuentra.`, english: `My brother looks for the ${englishItem} because he cannot find it.` }),
      () => ({ spanish: `Abro ${item} para que entre aire fresco.`, english: `I open the ${englishItem} so fresh air can come in.` }),
      () => ({ spanish: `En mi apartamento, ${item} esta cerca de la entrada.`, english: `In my apartment, the ${englishItem} is near the entrance.` }),
    ]);
  }

  if (themeKey.includes("places")) {
    return pick([
      () => ({ spanish: `Despues de clase camino hasta ${item}.`, english: `After class, I walk to the ${englishItem}.` }),
      () => ({ spanish: `Mi amigo me espera en ${item}.`, english: `My friend waits for me at the ${englishItem}.` }),
      () => ({ spanish: `Busco ${item} en el mapa antes de salir.`, english: `I look for the ${englishItem} on the map before leaving.` }),
      () => ({ spanish: `En vacaciones quiero visitar ${item}.`, english: `On vacation, I want to visit the ${englishItem}.` }),
      () => ({ spanish: `La reunion empieza cerca de ${item}.`, english: `The meeting starts near the ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("travel")) {
    return pick([
      () => ({ spanish: `Antes del viaje reviso ${item} dos veces.`, english: `Before the trip, I check the ${englishItem} twice.` }),
      () => ({ spanish: `Para llegar al hotel, sigo ${item}.`, english: `To get to the hotel, I follow the ${englishItem}.` }),
      () => ({ spanish: `En la estacion busco ${item} correcto.`, english: `At the station, I look for the correct ${englishItem}.` }),
      () => ({ spanish: `Cuando llueve, prefiero tomar ${item}.`, english: `When it rains, I prefer to take the ${englishItem}.` }),
      () => ({ spanish: `Mi maleta queda junto a ${item} durante la espera.`, english: `My suitcase stays next to the ${englishItem} during the wait.` }),
    ]);
  }

  if (themeKey.includes("time")) {
    return pick([
      () => ({ spanish: `Reviso ${item} antes de hacer mi plan.`, english: `I check the ${englishItem} before making my plan.` }),
      () => ({ spanish: `La cita es ${word.spanish}, asi que salgo pronto.`, english: `The appointment is ${englishItem}, so I leave soon.` }),
      () => ({ spanish: `Necesito un minuto para pensar en ${item}.`, english: `I need a minute to think about the ${englishItem}.` }),
      () => ({ spanish: `Mi clase empieza ${word.spanish} y no quiero llegar tarde.`, english: `My class starts ${englishItem}, and I do not want to be late.` }),
      () => ({ spanish: `Marco ${item} en mi calendario.`, english: `I mark the ${englishItem} on my calendar.` }),
    ]);
  }

  if (themeKey.includes("colors")) {
    return pick([
      () => ({ spanish: `El cuaderno ${word.spanish} esta en mi mochila.`, english: `The ${englishItem} notebook is in my backpack.` }),
      () => ({ spanish: `Para el dibujo elijo ${word.spanish}.`, english: `For the drawing, I choose ${englishItem}.` }),
      () => ({ spanish: `Mi camisa tiene un tono ${word.spanish}.`, english: `My shirt has a ${englishItem} tone.` }),
      () => ({ spanish: `En la lista marco la palabra con ${word.spanish}.`, english: `On the list, I mark the word with ${englishItem}.` }),
      () => ({ spanish: `La carpeta de la clase es ${word.spanish}.`, english: `The class folder is ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("descriptions")) {
    return pick([
      () => ({ spanish: `El ejercicio parece ${word.spanish}, pero puedo hacerlo.`, english: `The exercise seems ${englishItem}, but I can do it.` }),
      () => ({ spanish: `Mi amigo dice que el plan es ${word.spanish}.`, english: `My friend says the plan is ${englishItem}.` }),
      () => ({ spanish: `Este lugar es ${word.spanish} para una reunion corta.`, english: `This place is ${englishItem} for a short meeting.` }),
      () => ({ spanish: `El camino parece ${word.spanish} desde aqui.`, english: `The road seems ${englishItem} from here.` }),
      () => ({ spanish: `Para mi, el ejemplo es ${word.spanish} y claro.`, english: `For me, the example is ${englishItem} and clear.` }),
    ]);
  }

  if (themeKey.includes("actions")) {
    return pick(verbFrames);
  }

  if (themeKey.includes("body")) {
    return pick([
      () => ({ spanish: `Despues de correr, me duele ${item}.`, english: `After running, my ${englishItem} hurts.` }),
      () => ({ spanish: `En la cita medica, el doctor revisa ${item}.`, english: `At the medical appointment, the doctor checks the ${englishItem}.` }),
      () => ({ spanish: `Uso ${item} para senalar la respuesta.`, english: `I use the ${englishItem} to point to the answer.` }),
      () => ({ spanish: `Cuando hace frio, cubro ${item}.`, english: `When it is cold, I cover the ${englishItem}.` }),
      () => ({ spanish: `Durante el ejercicio, muevo ${item} con cuidado.`, english: `During exercise, I move the ${englishItem} carefully.` }),
    ]);
  }

  if (themeKey.includes("clothing")) {
    return pick([
      () => ({ spanish: `Por la manana elijo ${item} para ir a clase.`, english: `In the morning, I choose the ${englishItem} to go to class.` }),
      () => ({ spanish: `Si hace frio, llevo ${item}.`, english: `If it is cold, I wear the ${englishItem}.` }),
      () => ({ spanish: `Pongo ${item} en la maleta antes del viaje.`, english: `I put the ${englishItem} in the suitcase before the trip.` }),
      () => ({ spanish: `En la tienda busco ${item} de mi talla.`, english: `At the store, I look for the ${englishItem} in my size.` }),
      () => ({ spanish: `Despues de lavar ropa, guardo ${item} en el armario.`, english: `After doing laundry, I put the ${englishItem} in the closet.` }),
    ]);
  }

  if (themeKey.includes("weather")) {
    return pick([
      () => ({ spanish: `Antes de salir reviso ${item} en el telefono.`, english: `Before leaving, I check the ${englishItem} on my phone.` }),
      () => ({ spanish: `Por ${item}, llevo una chaqueta.`, english: `Because of the ${englishItem}, I bring a jacket.` }),
      () => ({ spanish: `Desde la ventana veo ${item} sobre la calle.`, english: `From the window, I see the ${englishItem} over the street.` }),
      () => ({ spanish: `El viaje cambia cuando hay ${item}.`, english: `The trip changes when there is ${englishItem}.` }),
      () => ({ spanish: `Hablo de ${item} con mi vecino en la manana.`, english: `I talk about the ${englishItem} with my neighbor in the morning.` }),
    ]);
  }

  if (themeKey.includes("school")) {
    return pick([
      () => ({ spanish: `En clase abro ${item} cuando empieza la leccion.`, english: `In class, I open the ${englishItem} when the lesson starts.` }),
      () => ({ spanish: `El profesor revisa ${item} al final del dia.`, english: `The teacher checks the ${englishItem} at the end of the day.` }),
      () => ({ spanish: `Uso ${item} para responder la pregunta.`, english: `I use the ${englishItem} to answer the question.` }),
      () => ({ spanish: `Guardo ${item} en la mochila despues de clase.`, english: `I put the ${englishItem} in my backpack after class.` }),
      () => ({ spanish: `Mi companero comparte ${item} conmigo.`, english: `My classmate shares the ${englishItem} with me.` }),
    ]);
  }

  if (themeKey.includes("number")) {
    return pick([
      () => ({ spanish: `Necesito ${word.spanish} boletos para el grupo.`, english: `I need ${englishItem} tickets for the group.` }),
      () => ({ spanish: `En la lista marco el numero ${word.spanish}.`, english: `On the list, I mark the number ${englishItem}.` }),
      () => ({ spanish: `La mesa tiene espacio para ${word.spanish} personas.`, english: `The table has room for ${englishItem} people.` }),
      () => ({ spanish: `Repito ${word.spanish} veces la palabra nueva.`, english: `I repeat the new word ${englishItem} times.` }),
      () => ({ spanish: `Compro ${word.spanish} cosas pequenas en la tienda.`, english: `I buy ${englishItem} small things at the store.` }),
    ]);
  }

  if (themeKey.includes("feeling")) {
    return pick([
      () => ({ spanish: `Me siento ${word.spanish} antes del examen.`, english: `I feel ${englishItem} before the exam.` }),
      () => ({ spanish: `Mi amigo esta ${word.spanish} despues de la llamada.`, english: `My friend is ${englishItem} after the call.` }),
      () => ({ spanish: `Cuando descanso bien, estoy ${word.spanish}.`, english: `When I rest well, I am ${englishItem}.` }),
      () => ({ spanish: `La noticia me deja ${word.spanish} por un momento.`, english: `The news leaves me ${englishItem} for a moment.` }),
      () => ({ spanish: `En una semana ocupada, es normal sentirse ${word.spanish}.`, english: `In a busy week, it is normal to feel ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("object")) {
    return pick(nounFrames);
  }

  if (themeKey.includes("useful")) {
    const usefulExamples = {
      aqui: { spanish: "Puedes dejar el formulario aqui.", english: "You can leave the form here." },
      alli: { spanish: "La salida esta alli, cerca de la puerta.", english: "The exit is there, near the door." },
      cerca: { spanish: "La farmacia esta cerca del hotel.", english: "The pharmacy is near the hotel." },
      lejos: { spanish: "La playa queda lejos de mi casa.", english: "The beach is far from my house." },
      dentro: { spanish: "Guardo el boleto dentro de la cartera.", english: "I keep the ticket inside the wallet." },
      fuera: { spanish: "Espero fuera del restaurante.", english: "I wait outside the restaurant." },
      arriba: { spanish: "La oficina esta arriba, en el segundo piso.", english: "The office is up, on the second floor." },
      abajo: { spanish: "La cafeteria esta abajo, junto a la entrada.", english: "The cafe is down, next to the entrance." },
      muy: { spanish: "La clase es muy util para principiantes.", english: "The class is very useful for beginners." },
      poco: { spanish: "Tengo poco tiempo antes del autobus.", english: "I have little time before the bus." },
      tambien: { spanish: "Mi amigo tambien quiere estudiar espanol.", english: "My friend also wants to study Spanish." },
      siempre: { spanish: "Siempre reviso mi horario por la manana.", english: "I always check my schedule in the morning." },
      nunca: { spanish: "Nunca dejo mi pasaporte en la mesa.", english: "I never leave my passport on the table." },
      "otra vez": { spanish: "Puedes repetir la frase otra vez.", english: "You can repeat the sentence again." },
      juntos: { spanish: "Estudiamos juntos en la biblioteca.", english: "We study together in the library." },
    };
    return usefulExamples[word.spanish];
  }

  if (themeKey.includes("day")) {
    return pick([
      () => ({ spanish: `El ${word.spanish} estudio despues del trabajo.`, english: `On ${englishItem}, I study after work.` }),
      () => ({ spanish: `Mi cita es el ${word.spanish} por la manana.`, english: `My appointment is on ${englishItem} in the morning.` }),
      () => ({ spanish: `El ${word.spanish} llamo a mi familia.`, english: `On ${englishItem}, I call my family.` }),
      () => ({ spanish: `Guardo tiempo el ${word.spanish} para caminar.`, english: `I save time on ${englishItem} to walk.` }),
      () => ({ spanish: `El plan cambia para ${word.spanish}.`, english: `The plan changes for ${englishItem}.` }),
    ]);
  }

  if (themeKey.includes("month")) {
    return pick([
      () => ({ spanish: `En ${word.spanish} empieza mi nueva clase.`, english: `In ${englishItem}, my new class starts.` }),
      () => ({ spanish: `Planeo viajar en ${word.spanish}.`, english: `I plan to travel in ${englishItem}.` }),
      () => ({ spanish: `Mi familia me visita en ${word.spanish}.`, english: `My family visits me in ${englishItem}.` }),
      () => ({ spanish: `Guardo dinero para ${word.spanish}.`, english: `I save money for ${englishItem}.` }),
      () => ({ spanish: `En ${word.spanish} el clima cambia mucho.`, english: `In ${englishItem}, the weather changes a lot.` }),
    ]);
  }

  if (themeKey.includes("animal")) {
    return pick([
      () => ({ spanish: `En el parque veo ${item} cerca del camino.`, english: `At the park, I see the ${englishItem} near the path.` }),
      () => ({ spanish: `Mi vecino cuida ${item} cuando viaja su familia.`, english: `My neighbor watches the ${englishItem} when his family travels.` }),
      () => ({ spanish: `En el libro aparece ${item} en una historia corta.`, english: `In the book, the ${englishItem} appears in a short story.` }),
      () => ({ spanish: `El nino dibuja ${item} para la tarea.`, english: `The boy draws the ${englishItem} for homework.` }),
      () => ({ spanish: `Durante el paseo escucho ${item} a lo lejos.`, english: `During the walk, I hear the ${englishItem} far away.` }),
    ]);
  }

  if (themeKey.includes("nature")) {
    return pick([
      () => ({ spanish: `Durante el paseo observo ${item} con calma.`, english: `During the walk, I observe the ${englishItem} calmly.` }),
      () => ({ spanish: `La foto muestra ${item} al fondo.`, english: `The photo shows the ${englishItem} in the background.` }),
      () => ({ spanish: `Cerca de casa hay ${item} muy bonito.`, english: `Near my house, there is a very pretty ${englishItem}.` }),
      () => ({ spanish: `En vacaciones quiero caminar junto a ${item}.`, english: `On vacation, I want to walk next to the ${englishItem}.` }),
      () => ({ spanish: `Despues de la lluvia, miro ${item} desde la ventana.`, english: `After the rain, I look at the ${englishItem} from the window.` }),
    ]);
  }

  if (themeKey.includes("shopping")) {
    return pick([
      () => ({ spanish: `En la tienda pregunto por ${item} antes de pagar.`, english: `At the store, I ask about the ${englishItem} before paying.` }),
      () => ({ spanish: `El recibo muestra ${item} al final.`, english: `The receipt shows the ${englishItem} at the end.` }),
      () => ({ spanish: `Comparo ${item} con cuidado antes de comprar.`, english: `I compare the ${englishItem} carefully before buying.` }),
      () => ({ spanish: `La cajera guarda ${item} en una bolsa.`, english: `The cashier puts the ${englishItem} in a bag.` }),
      () => ({ spanish: `Busco ${item} porque esta en oferta.`, english: `I look for the ${englishItem} because it is on sale.` }),
    ]);
  }

  if (themeKey.includes("health")) {
    return pick([
      () => ({ spanish: `Cuando no me siento bien, reviso ${item} con cuidado.`, english: `When I do not feel well, I check the ${englishItem} carefully.` }),
      () => ({ spanish: `En la farmacia compro ${item} para mi casa.`, english: `At the pharmacy, I buy the ${englishItem} for my house.` }),
      () => ({ spanish: `El doctor pregunta por ${item} durante la visita.`, english: `The doctor asks about the ${englishItem} during the visit.` }),
      () => ({ spanish: `Despues de caminar, necesito cuidar ${item}.`, english: `After walking, I need to care for the ${englishItem}.` }),
      () => ({ spanish: `Mi familia habla de ${item} en la cena.`, english: `My family talks about the ${englishItem} at dinner.` }),
    ]);
  }

  if (themeKey.includes("chore")) {
    return isVerb
      ? pick(verbFrames)
      : pick([
          () => ({ spanish: `Los domingos limpio ${item} antes del almuerzo.`, english: `On Sundays, I clean the ${englishItem} before lunch.` }),
          () => ({ spanish: `Despues de cenar saco ${item}.`, english: `After dinner, I take out the ${englishItem}.` }),
          () => ({ spanish: `Mi hermano ayuda con ${item} por la tarde.`, english: `My brother helps with the ${englishItem} in the afternoon.` }),
          () => ({ spanish: `Anoto ${item} en la lista de tareas.`, english: `I write the ${englishItem} on the chore list.` }),
          () => ({ spanish: `Antes de descansar, termino ${item}.`, english: `Before resting, I finish the ${englishItem}.` }),
        ]);
  }

  if (themeKey.includes("hobbies")) {
    return isVerb
      ? pick(verbFrames)
      : pick([
          () => ({ spanish: `Despues del trabajo disfruto ${item} para descansar.`, english: `After work, I enjoy the ${englishItem} to relax.` }),
          () => ({ spanish: `El sabado practico ${item} con mis amigos.`, english: `On Saturday, I practice the ${englishItem} with my friends.` }),
          () => ({ spanish: `En mi tiempo libre elijo ${item}.`, english: `In my free time, I choose the ${englishItem}.` }),
          () => ({ spanish: `Aprendo ${item} mirando videos cortos.`, english: `I learn the ${englishItem} by watching short videos.` }),
          () => ({ spanish: `La clase de ${word.spanish} empieza a las seis.`, english: `The ${englishItem} class starts at six.` }),
        ]);
  }

  if (themeKey.includes("communication")) {
    const communicationExamples = {
      mensaje: { spanish: "Envio un mensaje para confirmar la hora.", english: "I send a message to confirm the time." },
      correo: { spanish: "Reviso el correo antes de la reunion.", english: "I check the mail before the meeting." },
      llamada: { spanish: "Hago una llamada corta para pedir informacion.", english: "I make a short call to ask for information." },
      voz: { spanish: "Uso una voz clara cuando hablo por telefono.", english: "I use a clear voice when I speak on the phone." },
      palabra: { spanish: "Anoto la palabra nueva en mi cuaderno.", english: "I write the new word in my notebook." },
      frase: { spanish: "Practico una frase util antes del viaje.", english: "I practice a useful sentence before the trip." },
      idioma: { spanish: "El idioma cambia cuando cruzamos la frontera.", english: "The language changes when we cross the border." },
      espanol: { spanish: "Hablo espanol en la tienda para practicar.", english: "I speak Spanish at the store to practice." },
      ingles: { spanish: "Uso ingles cuando no conozco la palabra.", english: "I use English when I do not know the word." },
      conversacion: { spanish: "La conversacion empieza con una pregunta simple.", english: "The conversation starts with a simple question." },
      "voz baja": { spanish: "En la biblioteca hablo con voz baja.", english: "In the library, I speak with a quiet voice." },
      "voz alta": { spanish: "En el salon grande hablo con voz alta.", english: "In the large room, I speak with a loud voice." },
      repetir: { spanish: "Puedo repetir la direccion si no entiendes.", english: "I can repeat the address if you do not understand." },
      contestar: { spanish: "Voy a contestar el mensaje despues de clase.", english: "I am going to answer the message after class." },
      preguntar: { spanish: "Necesito preguntar donde esta la salida.", english: "I need to ask where the exit is." },
    };
    return communicationExamples[word.spanish];
  }

  if (themeKey.includes("restaurant") && word.spanish === "la cuenta") {
    return {
      spanish: "Despues de cenar, pido la cuenta al camarero.",
      english: "After dinner, I ask the waiter for the check.",
    };
  }

  if (themeKey.includes("mail")) {
    const mailExamples = {
      "oficina postal": { spanish: "Voy a la oficina postal para mandar una carta.", english: "I go to the post office to send a letter." },
      carta: { spanish: "Escribo una carta corta a mi abuela.", english: "I write a short letter to my grandmother." },
      "tarjeta postal": { spanish: "Compro una tarjeta postal durante el viaje.", english: "I buy a postcard during the trip." },
      sello: { spanish: "Pongo un sello en la esquina del sobre.", english: "I put a stamp on the corner of the envelope." },
      buzon: { spanish: "Dejo la carta en el buzon antes de ir al trabajo.", english: "I leave the letter in the mailbox before going to work." },
      cartero: { spanish: "El cartero trae una carta por la manana.", english: "The mail carrier brings a letter in the morning." },
      "servicio postal": { spanish: "Uso el servicio postal para mandar documentos.", english: "I use the postal service to send documents." },
      "fila postal": { spanish: "Espero en la fila postal para comprar sellos.", english: "I wait in the post office line to buy stamps." },
      "direccion postal": { spanish: "Escribo la direccion postal con letra clara.", english: "I write the mailing address clearly." },
      "codigo postal": { spanish: "Reviso el codigo postal antes de enviar la carta.", english: "I check the zip code before sending the letter." },
      destinatario: { spanish: "El destinatario vive en otro estado.", english: "The recipient lives in another state." },
      remitente: { spanish: "El remitente escribe su nombre atras.", english: "The sender writes their name on the back." },
      entrega: { spanish: "La entrega llega el viernes por la tarde.", english: "The delivery arrives on Friday afternoon." },
      "recibo postal": { spanish: "Guardo el recibo postal despues de pagar.", english: "I keep the postal receipt after paying." },
      "numero de seguimiento": { spanish: "Uso el numero de seguimiento para ver donde esta la carta.", english: "I use the tracking number to see where the letter is." },
    };
    return mailExamples[word.spanish];
  }

  if (themeKey.includes("community")) {
    const communityExamples = {
      evento: { spanish: "El evento empieza despues del almuerzo.", english: "The event starts after lunch." },
      "fiesta comunitaria": { spanish: "La fiesta comunitaria tiene comida y musica.", english: "The community party has food and music." },
      "reunion vecinal": { spanish: "En la reunion vecinal hablamos sobre la calle.", english: "At the neighborhood meeting, we talk about the street." },
      asistente: { spanish: "Cada asistente recibe una etiqueta con su nombre.", english: "Each attendee receives a name tag." },
      anuncio: { spanish: "Leo el anuncio en la puerta del centro.", english: "I read the announcement on the center door." },
      voluntario: { spanish: "Un voluntario ayuda a las personas a encontrar sus asientos.", english: "A volunteer helps people find their seats." },
      vecindario: { spanish: "El vecindario organiza una limpieza el sabado.", english: "The neighborhood organizes a cleanup on Saturday." },
      celebracion: { spanish: "La celebracion termina con una foto de grupo.", english: "The celebration ends with a group photo." },
      "horario del evento": { spanish: "Miro el horario del evento para no perder la charla.", english: "I look at the event schedule so I do not miss the talk." },
      "lugar del evento": { spanish: "El lugar del evento esta cerca de la biblioteca.", english: "The event location is near the library." },
      "lista de invitados": { spanish: "La organizadora revisa la lista de invitados en la entrada.", english: "The organizer checks the guest list at the entrance." },
      organizador: { spanish: "El organizador explica el plan antes de empezar.", english: "The organizer explains the plan before starting." },
      publico: { spanish: "El publico escucha con atencion durante la presentacion.", english: "The audience listens carefully during the presentation." },
      "programa del evento": { spanish: "El programa del evento muestra las actividades de la tarde.", english: "The event program shows the afternoon activities." },
      "hora de inicio": { spanish: "Confirmo la hora de inicio antes de salir de casa.", english: "I confirm the start time before leaving home." },
    };
    return communityExamples[word.spanish];
  }

  if (themeKey.includes("connectors")) {
    const connectorFrames = [
      [`Compro pan ${word.spanish} leche para la cena.`, `I buy bread ${englishItem} milk for dinner.`],
      [`Podemos estudiar ahora ${word.spanish} despues de comer.`, `We can study now ${englishItem} after eating.`],
      [`Quiero salir, ${word.spanish} necesito terminar la tarea.`, `I want to go out, ${englishItem} I need to finish the homework.`],
      [`Me quedo en casa ${word.spanish} llueve mucho.`, `I stay home ${englishItem} it is raining a lot.`],
    ];
    const [spanish, english] = connectorFrames[wordIndex % connectorFrames.length];
    return { spanish, english };
  }

  return {
    spanish: isVerb
      ? pick(verbFrames).spanish
      : pick(nounFrames).spanish,
    english: isVerb
      ? pick(verbFrames).english
      : pick(nounFrames).english,
  };
}

export const modules = rawModules.map((module, moduleIndex) => ({
  ...module,
  words: module.words.map((word, wordIndex) => ({
    ...word,
    example: makeExample(word, moduleIndex, wordIndex, module.theme),
  })),
}));
