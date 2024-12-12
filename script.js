function verificarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    console.log("Todos los campos están completos.");
  } else {
    console.log("Faltan campos por completar.");
  }
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  verificarFormulario();
});

function generarProductos() {
  return [
    {
      nombre: "Monitor Dell UltraSharp 27",
      descripcion:
        "Monitor de 27 pulgadas con resolución 4K UHD, panel IPS y diseño elegante.",
      imagen:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2724d/media-gallery/monitor-ultrasharp-u2724d-qhd-gy-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=541&qlt=100,1&resMode=sharp2&size=541,476&chrss=full",
    },
    {
      nombre: "Monitor Samsung Odyssey G7",
      descripcion:
        "Monitor curvado de 32 pulgadas con tasa de refresco de 240Hz y resolución QHD.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_826795-MLA54696206176_032023-F.jpg",
    },
    {
      nombre: "Monitor LG 27GL83A-B",
      descripcion:
        "Monitor de 27 pulgadas con resolución QHD, panel IPS y soporte para G-Sync.",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnwOObHonZXuWQRF_kPx14nMmEh3VQTKAvmUYH-b3brA5ZKlJk7qJbgJ4ul56_w192Xt9itZzey9t0tz9eNH_Y1TnNtM5YlOR6PMFCPMaNl4KiZPWiPM4Q&usqp=CAE",
    },
    {
      nombre: "Monitor ASUS TUF Gaming VG27AQ",
      descripcion:
        "Monitor gaming de 27 pulgadas con resolución QHD, 165Hz de refresco y tecnología ELMB.",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfp0usD-wyGDcqb2cQCGRBk8rkt1u_jO_9qXl07Bkb6qbER-Miy3KtochjWwwgNz-h43dYB0W_Yse92WdDdTQqReoISyCTFMWEedFTv7FfGm0224xOKiRt&usqp=CAE",
    },
    {
      nombre: "Monitor BenQ PD2700U",
      descripcion:
        "Monitor profesional de 27 pulgadas 4K UHD, ideal para diseño gráfico y edición de video.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLFh8kf9yGZAKunQa1SZ1RT4An8veuLEohH9YSurwLG-bPqgfY4hR2kD8LtTqfK-yTtt8GL1NBWk4M7-lrC5JwVX3LKIp01t1P28qbG7iU234HIb6XL4E-wg&usqp=CAE",
    },
    {
      nombre: "Monitor Acer Predator X34",
      descripcion:
        "Monitor curvado de 34 pulgadas, resolución UWQHD, 180Hz de tasa de refresco, ideal para gaming.",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuABnDXjmCrSOVsshaHgub60csoZdbjOwqqAX3js_VctB-vYIUksoese2nLKQ2JlD42cbl36LMkrHTpalIxIrfH2Q89sHpvvETIYOevhJzrzQtiMgZU8Jqpg&usqp=CAE",
    },
  ];
}

const productos = generarProductos();
productos.forEach((producto, index) => {
  console.log(`${index + 1}. ${producto.nombre}: ${producto.descripcion}`);
});

const contenedorProductos = document.querySelector(".productos-container");

function mostrarProductos() {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
        `;
    contenedorProductos.appendChild(card);

    card.addEventListener("click", () => {
      alert(`Has seleccionado: ${producto.nombre}\n${producto.descripcion}`);
    });
  });
}

mostrarProductos();
