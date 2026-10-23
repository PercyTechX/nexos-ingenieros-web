# Investigación de blog: instalaciones eléctricas

> Fecha: 2026-10-22 · Familia: tableros, subestaciones, iluminación (luminarias, lux), puesta a tierra / pozo a tierra, letreros luminosos, transformadores de aislamiento, UPS, tomacorrientes, megado, diagramas unifilares, mantenimiento predictivo (termografía).
> **Evidencia:**
> - Autocompletado de Google Perú (`suggestqueries.google.com … hl=es&gl=pe`): **314 consultas**, entre ellas el truco de letras (a–v) con 4 semillas: *mantenimiento de tableros eléctricos*, *pozo a tierra*, *certificado de pozo a tierra* y *mantenimiento de pozo a tierra*.
> - Resultados de Bing con mercado Perú (`cc=PE&mkt=es-PE`) para ver quién rankea: 26 consultas. Lo hice así porque WebSearch sale desde EE. UU. y casi no devuelve páginas peruanas, y DuckDuckGo bloqueó las consultas tras la primera.
> - WebSearch y documentos oficiales para las normas.
>
> **No se dan cifras de volumen.** "[n]" es el número de sugerencias que devolvió la semilla (el máximo es 10). Con el truco de letras: *pozo a tierra* dio **193** variantes únicas, *mantenimiento de pozo a tierra* **71**, *mantenimiento de tableros eléctricos* **53** y *certificado de pozo a tierra* **43**.
> Salida bruta: `/tmp/claude-1000/-home-percytech-Projects-Dev-NEXOSINGENIEROS-paginaWeb/a996aa53-4281-4efe-ab04-6ede5e53dbbe/scratchpad/ac/out1.txt … out6.txt`.

## Hallazgos clave (antes de la tabla)

1. **Pozo a tierra es la familia con más demanda.** Supera de lejos a todo lo demás, y la gente separa dos intenciones:
   - el **documento**: certificado o protocolo, vigencia, quién lo firma, modelo, cuántos ohmios;
   - el **servicio**: mantenimiento, cada cuánto, precio, procedimiento, materiales.

   Conviene un artículo para cada una, y no uno solo como el ★3 actual.
2. **El acta oficial de ITSE (CENEPRED, Anexo 9) trae 9 observaciones eléctricas tipificadas**, con su artículo del CNE-Utilización (ítems 8 a 16). Son exactamente lo que NEXOS levanta en Integratel, Siemens Energy e Inkafarma. Ningún competidor que vi las explica una por una. Es el artículo más diferenciador de la familia.
3. **Megado, directorio de circuitos y diagrama unifilar** tienen búsquedas de *documento* ("protocolo de megado de tableros pdf", "directorio de tablero eléctrico excel", "diagrama unifilar y cuadro de cargas"). Hoy los ganan **Scribd, kupdf y Studocu**, es decir, no hay un buen contenido propio. Es una oportunidad barata.
4. **Subestaciones, UPS, transformadores de aislamiento y letreros** tienen búsquedas, pero dominadas por vendedores de equipos (UPS) o fabricantes (letreros), o sin proyecto de NEXOS que mostrar (subestaciones). Prioridad baja.
5. **"Cada cuánto"** casi no sale para tableros (0 sugerencias). Sí sale para pozo a tierra ("mantenimiento de pozo a tierra cada cuanto tiempo", "cada que tiempo se hace mantenimiento de pozo a tierra").
6. **Términos sin evidencia:**
   - "tablero eléctrico CNE", "tablero eléctrico requisitos (defensa civil)", "observaciones ITSE eléctricas", "tomacorrientes defensa civil", "diagrama unifilar ITSE / defensa civil", "medición de pozo a tierra precio", "nivel de iluminación en tiendas" y "cambio de lona letrero luminoso" dan 0.
   - "tablero electrico itse", "tablero electrico defensa civil" y "pozo a tierra defensa civil" dan solo 1, la frase literal.
   - Conclusión: la gente **no junta "ITSE" con "tablero" al buscar**. Pregunta "qué debe tener un tablero eléctrico" y "qué revisa Defensa Civil en un local". El artículo de ITSE eléctrico debe atacar esas formulaciones.

---

## 1. Tabla de búsquedas encontradas

Leyenda de intención: **I** = informarse · **C** = contratar · **P** = precio · **D** = busca un documento o formato (protocolo, certificado, modelo, PDF).

### 1.1 Pozo a tierra / puesta a tierra
| término | intención | evidencia (sugerencias literales) | quién rankea hoy (Bing PE) |
|---|---|---|---|
| pozo a tierra (genérico) | I | [10] "para que sirve", "precio", "horizontal", "vertical", "con cemento conductivo", "o puesta a tierra", "prefabricado"; letras: 193 variantes ("es obligatorio", "es necesario", "para negocio", "para local comercial", "quien lo hace", "norma peruana", "ntp", "rne", "codigo nacional de electricidad", "luz del sur", "lima") | — |
| certificado de pozo a tierra | D + P | [10] "pdf", "costo", "peru", "en lima", "cuanto dura", "word", "modelo", "certificado de operatividad"; letras: "vigencia", "duracion", "quien firma el certificado de pozo a tierra", "quien emite", "como sacar", "certificado pozo a tierra indeci", "**certificado vigente de medición de resistencia del pozo a tierra**" (la frase oficial del ITSE), "**el certificado de pozo a tierra no siempre dura 12 meses**" | tvdservicios.pe, pozoatierra.org ("Costo 2026 \| INDECI y Licencia"), corporaciongroupmen.com, electrofonperu.pe/blog, **globalingenieros.com/blog** ("qué debe decir el protocolo"), reintek.com.pe, ingenierosdelperu.com, Scribd (modelos), clubmitsubishiasx.com (granja de contenido) |
| protocolo de pozo a tierra / de medición | D | [10] "pdf", "modelo", "peru", "de medicion", "modelo … word", "de pruebas", "de mantenimiento", "de operatividad" | Scribd y las mismas empresas |
| cuántos ohmios debe tener un pozo a tierra | I | "cuanto debe medir un pozo a tierra (en perú / en ohmios / para cómputo)", "cuantos ohmios debe medir … en peru", "pozo a tierra 5 ohmios / 25 ohmios / 3 ohmios", "valores de pozo a tierra peru", "resistencia de puesta a tierra máxima permitida perú" | solux.pe/blog, **eye.pe/blog** ("¿Cada cuánto medir tu pozo a tierra? CNE Perú"), corporaciongroupmen.com, yotesalvo.com, eximiahaus.pe, nivicab.com, Scribd |
| mantenimiento de pozo a tierra | C + P | [10] "precio", "procedimiento", "precio perú", "pdf", "con cemento conductivo", "con thorgel", "materiales", "en lima"; letras (71): "cada cuanto tiempo", "cada que tiempo se hace", "cuanto se cobra por", "cuanto cuesta … en peru", "en que consiste", "que se hace en un", "como se hace", "paso a paso", "informe de mantenimiento", "certificado de mantenimiento", "cotizacion", "**detraccion**", "tdr", "pets", "iperc", "ats" | kwelectricistas.pe, pozoatierra.org, yotesalvo.com (precio publicado), corporaciongroupmen.com, pozosatierra.com (precio publicado), prosafetyperu.com, **administracionedificiosperu.com** ("¿cada cuánto…?", público de administradores) |
| instalación de pozo a tierra | C + P | [10] "precio", "en lima", "certificado", "horizontal", "vertical", "paso a paso", "tdr …" · "cuanto cuesta un pozo a tierra (en lima / en perú / instalar / hacer)" [10] | kwelectricistas.pe, tvdservicios.pe (precio publicado), grupocasalima.com, corporaciongroupmen.com, grupo-sei.com |
| medición de pozo a tierra | I + C | [10] "con telurómetro", "metodo 62%", "peru", "certificado de medicion", "protocolo de medicion", "metodos" · "como medir un pozo a tierra" [7] | — |
| pozo a tierra para local comercial / para negocio | C | aparecen las dos con "pozo a tierra para …" | kwelectricistas.pe, tvdservicios.pe, grupocasalima.com |
| aterramiento de estructuras metálicas / de tablero | I + C | [10] "de bandejas portacables", "de equipos", "de tablero eléctrico"; [4] "norma peruana", "cne", "certificado de aterramiento de estructuras metálicas" | — |
| puesta a tierra norma / SPAT | I | "puesta a tierra norma peruana"; "sistema de puesta a tierra spat" [1]; "spat" solo trae ruido | — |

### 1.2 Tableros eléctricos
| término | intención | evidencia | quién rankea hoy |
|---|---|---|---|
| mantenimiento de tableros eléctricos | C + P + D | [10] "industriales", "pdf", "precio", "procedimiento", "**en lima**", "preventivo", "correctivo"; letras (53): "check list", "costo de", "cotizacion de", "en que consiste", "formato", "informe técnico", "modelo de informe", "plan de mantenimiento", "protocolo de mantenimiento", "servicio de", "norma para", "tdr", "pets", "iperc" | **corporaciongroupmen.com** (2 URL), voltiva.group, stamerica.com.pe, cgrindustrial.pe, oantonio.com, electrofonperu.pe, absequiposcontraincendios.com.pe. Son todas páginas de servicio, no hay guías. |
| mantenimiento preventivo de tableros eléctricos | I + D | [7] "pdf", "procedimiento de", "informe de", "formato de", "**qué se hace en un mantenimiento preventivo de tableros eléctricos**" | Scribd |
| cuánto cuesta (el mantenimiento de) un tablero eléctrico | P | [9] "cuanto cuesta el mantenimiento de un tablero electrico", "instalar", "cambiar", "armar", "peinar" | — |
| qué debe tener un tablero eléctrico | I | [7] "que protecciones debe tener", "que altura debe tener", "que temperatura debe tener", "**que señalizacion debe tener**", "**qué identificación debe tener un tablero eléctrico**" · "como debe estar un tablero electrico" [3] | Scribd ("ITSE – Electricidad Módulo IV – Tableros"), **munlima.gob.pe** (recomendaciones ITSE), entesefsacperu.com, sudimafe.com |
| directorio de circuitos / de tablero | D | [6] "directorio de circuitos electricos (excel / pdf / **peru**)"; [5] "directorio de tablero electrico (pdf / excel)", "formato directorio de tablero" | Scribd (formatos), Promart (producto) |
| rotulado / señalización / mandil de tablero | I + D | "rotulado de tablero eléctrico" [2]; "señalización de tablero eléctrico" [3]; "mandil de tablero eléctrico" [5] ("precio", "cual es el mandil") | — |
| tablero eléctrico + ITSE / Defensa Civil | — | solo la frase literal [1]. "tablero eléctrico requisitos", "tablero electrico cne" y "observaciones itse eléctricas" dan 0 | — |
| que revisa / que pide defensa civil | I | "que revisa defensa civil en un local", "que pide defensa civil para un negocio", "que documentos pide defensa civil", "requisitos de defensa civil para un local comercial" | (lo cubre la familia ITSE) |
| tablero eléctrico (producto) | — | domiciliario, 12 polos, trifásico, precio. Es intención de compra de hogar: **descartar** | Sodimac, Promart |

### 1.3 Diagrama unifilar
| término | intención | evidencia | quién rankea hoy |
|---|---|---|---|
| diagrama unifilar | I (sesgo estudiante/hogar) | [10] "de tablero electrico", "de una casa", "dwg", "coes", "**y cuadro de cargas**"; "que es un diagrama unifilar" [10] ("y para que sirve", "**que debe contener un diagrama unifilar**", "ejemplos"); "como hacer un diagrama unifilar" [10] (autocad, excel, word); "como leer" [2] | — |
| diagrama unifilar de tablero | D | [10] "dwg", "pdf", "trifasico", "de distribucion", "general", "estabilizado", "de transferencia automatica" | Scribd, librerías CAD |
| diagrama unifilar de un local comercial | C/I | [1] la frase literal | — |
| diagrama unifilar ITSE / defensa civil | — | 0 sugerencias, pero en Bing PE rankean "Diagramas Unifilares: Manual de Ejecución de ITSE" (Docsity) y una página "Diagrama unifilar para el ITSE" | Docsity, Scribd |

### 1.4 Megado, aislamiento, termografía y predictivo
| término | intención | evidencia | quién rankea hoy |
|---|---|---|---|
| megado de tableros | D + C | [7] "megado de tableros eléctricos", "**protocolo de megado de tableros (pdf)**", "**certificado de megado de tableros eléctricos**", "formato de megado"; "megado" [10] incluye "de tablero electrico"; "que es megado un tablero electrico" [1] | **Scribd, kupdf, pdfcookie, idoc.pub, Studocu** (documentos); servicios: ingenierosdelperu.com, proyectosfamoca.com; un grupo de Facebook "Megado de tableros eléctricos Lima – Perú" |
| megado de cables / conductores | D | [10] "pdf", "valores", "baja tensión", "media tensión", "fluke"; "protocolo de megado de conductores" | — |
| prueba / medición de resistencia de aislamiento | I | [10] por semilla, sesgadas a motores y transformadores | — |
| termografía tableros eléctricos | I + D | "termografia tableros electricos" [2], "**informe termografía tableros eléctricos**"; "termografía eléctrica" [10] ("costo de termografía eléctrica", "estudio de", "normas", "pdf"); "que es termografia en mantenimiento"; "termografia infrarroja mantenimiento predictivo" | Scribd, kupdf (informes chilenos), sedisaservicios.com. Hay **poca competencia peruana**. "termografía" sola se la lleva la termografía de mama |
| mantenimiento predictivo | I (estudiante) | [10] "ejemplos", "tecsup", "significado", "predictivo preventivo y correctivo diferencias"; "mantenimiento predictivo a tableros electricos" [1] | (Tecsup, cursos) |

### 1.5 Iluminación
| término | intención | evidencia | quién rankea hoy |
|---|---|---|---|
| nivel de iluminación en oficinas | I | [8] "lux", "recomendado", "minimo", "recomendado para trabajos en oficinas lux" · "cuantos lux debe tener una oficina" · "luxes para oficina" | pilight.es (España), **monitoreo-ocupacional.pe** ("valores LUX según normativa peruana"), calcele.com (México), instalect.co (Colombia) |
| niveles de iluminación norma perú | I | "niveles de iluminación norma perú" (1.ª sugerencia), "en el trabajo", "para tareas visuales"; "rm 375 tr 2008 iluminacion (tabla, pdf)" [4] | — |
| medición / monitoreo de iluminación | C + I | "medición de iluminación con luxómetro", "medicion de iluminacion protocolo"; "monitoreo de iluminación perú", "informe de monitoreo de iluminación" | ambisafe.com.pe, peiperu.com.pe/blog, nakamura.com.pe, ogreen.com.pe (consultoras de SST) |
| luxómetro | P (equipo) | [10] "precio", "precio perú", "para que sirve", "app" | tiendas |
| cambio de luminarias (a LED) | C + P | "cambio de luminarias" [10] ("a led", "fluorescentes a led", "precio", "en altura", "ats"); "proyecto cambio de luminarias a led"; "cambiar (tubos) fluorescentes por led" [7] | kwelectricistas.pe, electrofonperu.pe, deltavolt.pe, solu.pe, tecnesi-peru.com |
| iluminación para tiendas / locales comerciales | I | [5] "comerciales", "de ropa", "pequeñas", "led para tiendas"; "tipos de iluminación para locales comerciales" | nissi.com.pe, lynaled.pe, ilumina.pe, promelsa.com.pe (vendedores de luminarias) |
| iluminación / luces de emergencia | I + P | "luces de emergencia normativa peruana (pdf)", "cada cuantos metros", "precio" | (lo cubre el artículo #12 de ITSE) |

### 1.6 Subestaciones, transformadores, UPS, letreros y tomacorrientes
| término | intención | evidencia | quién rankea hoy |
|---|---|---|---|
| mantenimiento de subestación eléctrica | I + C | [7] "preventivo", "correctivo", "plan de mantenimiento de una subestación", "**costo de mantenimiento**", "programa … pdf", "normas de mantenimiento"; "que es una subestacion electrica (en un edificio)" | itepeyac.com (MX), electrofonperu.pe/blog, wesler.com.pe, aeenergy.com.pe, Scribd |
| mantenimiento de transformadores | C + P | [10] "precio", "de media tension", "secos"; "mantenimiento (preventivo) de transformador de aislamiento" [2] | geselec-sac.com, cda-ingenieros.com, corporaciongroupmen.com, resitecperu.com |
| transformador de aislamiento | I + P | [10] "para que sirve", "**para ups**", "monofásico", "3kva", "precio (peru)"; "que es un transformador de aislamiento y para que sirve" | audax.com.pe, upsdelperu.com.pe, powersunups.com (vendedores) |
| mantenimiento de UPS | C + P | [10] "**en lima**", "pdf", "apc"; "mantenimiento preventivo ups precio", "que se hace en un mantenimiento preventivo de ups", "cambio de baterias ups (apc, eaton)" | etronicperu.com, ventadeups.com.pe, celepperu.com, alka.com.pe, dnp.com.pe (marcas y distribuidores) |
| mantenimiento de letreros luminosos | C | [1] la frase literal; "letreros luminosos (lima / para negocios / precio)" [10] es intención de **fabricar o comprar** | letrerosaltorelieve.com, iscoimagen.com, tuletrero.com, misvropeaccess.com |
| tomacorrientes | P (producto) | marcas (Bticino, schuko); "instalacion de tomacorrientes con puesta a tierra"; "tomacorrientes norma peruana" [1] | tiendas: **descartar como artículo** |
| interruptor diferencial | P | productos; "interruptor diferencial obligatorio" [1] | tiendas |
| cables libres de halógenos | I | "normativa perú", "indeco", "lszh" | (fuera de alcance; posible H3) |

### 1.7 Norma y genéricos
| término | intención | evidencia | comentario |
|---|---|---|---|
| código nacional de electricidad (utilización) | I | [10] "perú", "pdf", "utilización", "2026", "actualizado"; "cne utilizacion" [10] ("pdf", "2006", "interpretacion", "seccion 060 712") | Lo buscan técnicos e ingenieros. Sirve como referencia en los artículos, no como búsqueda principal |
| norma EM.010 / RNE EM 010 | I | [10] "instalaciones eléctricas interiores pdf", "actualizada" | Igual que el anterior |
| mantenimiento de instalaciones eléctricas | I + C | [10] "industriales", "de baja tensión", "norma", "preventivo", "pdf" | Va a la página de servicio Mantenimiento (ya está en el SEO.md) |
| mantenimiento eléctrico Lima | — | AC✘: solo cerco eléctrico y scooter | No usar |
| plan / programa de mantenimiento eléctrico | D | [10] "pdf", "ejemplos", "excel", "preventivo" | H2 del artículo de tableros |
| inspección de instalaciones eléctricas | D | [10] "formato", "xls gratis", "informe de inspección" | H2 del artículo de tableros (checklist) |

---

## 2. Artículos propuestos (priorizados)

> Reglas del SEO.md §5: una búsqueda por artículo, entre 900 y 1 500 palabras, CTA al cotizador con el pilar preseleccionado y validación del cliente en los temas normativos. Varios proyectos citados tienen `pending: true` en proyectos.json, así que hay que confirmar con el cliente que se pueden publicar.

### E1 · ALTA — Certificado de pozo a tierra (reemplaza el enfoque del ★3)
- **Título SEO (60):** Certificado de pozo a tierra: vigencia, ohmios y quién firma
- **Slug:** `/blog/certificado-de-pozo-a-tierra/`
- **Búsqueda principal:** certificado de pozo a tierra
- **Secundarias:** protocolo de medición de pozo a tierra · certificado de pozo a tierra cuánto dura / vigencia · cuántos ohmios debe tener un pozo a tierra en Perú · quién firma el certificado de pozo a tierra · modelo de certificado de pozo a tierra · certificado de pozo a tierra costo
- **Intención:** informarse + documento → contratar la medición
- **Pilar:** `indeci`
- **Preguntas que debe responder** (todas salen literal en el autocompletado):
  - ¿Qué es el certificado (o protocolo) de pozo a tierra y para qué lo piden?
  - ¿Cuánto dura? ("el certificado de pozo a tierra no siempre dura 12 meses")
  - ¿Quién lo emite y quién lo firma?
  - ¿Cuántos ohmios debe medir en Perú?
  - ¿Cómo se mide (telurómetro, método del 62 %)?
  - ¿Qué debe decir el protocolo? Incluir un modelo propio en lugar de remitir a Scribd.
  - ¿Cuánto cuesta? Dar rangos solo si el cliente los aprueba; si no, explicar de qué depende.
  - ¿Qué pasa si sale más de 25 Ω?
- **Normas / datos verificados:**
  - Requisito ITSE: "Certificado vigente de medición de resistencia del sistema de puesta a tierra. De conformidad con el Código Nacional de Electricidad, el valor… **no debe exceder los 25 ohmios**… la medición… **debe realizarse anualmente** y estar firmado por un **ingeniero electricista o mecánico electricista, colegiado y habilitado**". Fuente: Municipalidad de Comas, requisitos de ITSE: https://www.municomas.gob.pe/resources/upload/paginas/licencias/lf/2023/REQUISITOS%20DE%20INSPECCION%20TECNICA%20DE%20SEGURIDAD%20EN%20EDIFICACIONES.pdf
  - Acta oficial de ITSE, observación 9: "Presentar / Actualizar el certificado de medición de resistencia del pozo a tierra, firmado por un ingeniero electricista o mecánico electricista colegiado y habilitado. **CNE-U 060.712**". Fuente: CENEPRED, Anexo 9: https://www.cenepred.gob.pe/web/wp-content/uploads/Itse/Anexo%202018/Anexo-9-Acta-de-Diligencia-de-ITSE.pdf
  - CNE-Utilización aprobado por la RM 037-2006-MEM/DM (texto en FAOLEX): https://faolex.fao.org/docs/pdf/per61737.pdf
  - **Pendiente de verificar:** el texto literal de la sección 060-712 del CNE-U.
- **Proyectos NEXOS:** `inkafarma-belaunde-6` (mantenimiento de pozo y aterramiento), `siemens-energy`, `mass-llanos-ate` y otras tiendas MASS y La Tinka (instalación de SPAT nuevo).
- **Prioridad:** alta. Es la familia con más demanda y ya es requisito de la ITSE. NEXOS puede dar el certificado firmado (hay que confirmar que tiene ingeniero CIP propio). Los competidores son empresas pequeñas y Scribd.

### E2 · ALTA — Mantenimiento de pozo a tierra (nuevo; se separa del ★3)
- **Título SEO (59):** Mantenimiento de pozo a tierra: cada cuánto, pasos y precio
- **Slug:** `/blog/mantenimiento-de-pozo-a-tierra/`
- **Búsqueda principal:** mantenimiento de pozo a tierra
- **Secundarias:** mantenimiento de pozo a tierra cada cuánto tiempo · mantenimiento de pozo a tierra precio Perú · en qué consiste / qué se hace en un mantenimiento de pozo a tierra · mantenimiento de pozo a tierra con thorgel / cemento conductivo · informe de mantenimiento de pozo a tierra · mantenimiento de pozo a tierra en Lima
- **Intención:** contratar + precio
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿Cada cuánto se hace? Ligarlo a la medición anual que pide la ITSE.
  - ¿En qué consiste y cuáles son los pasos?
  - ¿Qué materiales se usan (thorgel, bentonita, cemento conductivo) y cuál conviene?
  - ¿Existe el pozo "libre de mantenimiento"? ("pozo a tierra libre de mantenimiento" y "sin mantenimiento" salen en el autocompletado.)
  - ¿Cuánto se cobra y de qué depende?
  - ¿Se aplica detracción? ("mantenimiento de pozo a tierra detraccion" sale en el autocompletado. **No está verificado:** que lo valide el contador del cliente antes de publicarlo.)
  - ¿Qué informe o certificado se entrega al final?
- **Normas / datos verificados:** la medición anual y el límite de 25 Ω (mismas fuentes que E1). Enlazar a E1 para la parte documental.
- **Proyectos NEXOS:** `inkafarma-belaunde-6`.
- **Prioridad:** alta. Hay demanda transaccional con precio, y lo buscan administradores de edificios y locales (administracionedificiosperu.com rankea). Los competidores publican precios (yotesalvo.com, pozosatierra.com, tvdservicios.pe). NEXOS no tiene que publicar precio, pero sí explicar de qué depende.

### E3 · ALTA — Tablero eléctrico e ITSE: las 9 observaciones (nuevo)
- **Título SEO (58):** Tablero eléctrico e ITSE: 9 observaciones y cómo evitarlas
- **Slug:** `/blog/tablero-electrico-observaciones-itse/`
- **Búsqueda principal:** qué debe tener un tablero eléctrico (para Defensa Civil / ITSE)
- **Secundarias:** qué revisa Defensa Civil en un local · qué identificación debe tener un tablero eléctrico · qué señalización debe tener un tablero eléctrico · directorio de circuitos eléctricos (Perú, formato) · mandil de tablero eléctrico · tablero eléctrico Defensa Civil
- **Intención:** informarse → contratar la adecuación
- **Pilar:** `indeci`
- **Preguntas que debe responder:** ¿Qué revisa el inspector en la parte eléctrica? Recorrer las 9 observaciones del acta oficial, cada una con su artículo del CNE-U y una foto de NEXOS:
  1. Tapas en los espacios de reserva del tablero (070.3026).
  2. Certificado de pozo a tierra (060.712); enlazar a E1.
  3. Equipos y tomacorrientes conectados a tierra (060.512.c).
  4. Conductores protegidos con tubo o canaleta (070.212).
  5. Tapas en las cajas de paso (070.3002 y 070.3004).
  6. Identificación del tablero (020.100.1).
  7. Directorio de circuitos claro y visible (020.100.1 y 020.100.3.1).
  8. Un metro libre frente al tablero (020.308).
  9. Iluminación general y de emergencia en la zona del tablero (020.314).

  Incluir además un modelo descargable de directorio de circuitos, que hoy solo está en Scribd.
- **Normas / datos verificados:**
  - Ítems 8 a 16 del Acta de Diligencia de ITSE (CENEPRED, Anexo 9), con su artículo del CNE-U: https://www.cenepred.gob.pe/web/wp-content/uploads/Itse/Anexo%202018/Anexo-9-Acta-de-Diligencia-de-ITSE.pdf
  - Reglamento de ITSE, D.S. 002-2018-PCM: https://busquedas.elperuano.pe/dispositivo/NL/1603409-1
- **Proyectos NEXOS:** `ct-cusco` (directorio rotulado, megado, señalización de riesgo eléctrico, luces de emergencia), `ct-chimbote`, `siemens-energy` (puesta a tierra de botoneras y estructuras), `inkafarma-belaunde-6` (aterramiento del mandil y de las cajas metálicas, reordenamiento del tablero).
- **Prioridad:** alta. Es contenido único con fuente oficial y coincide 1:1 con el servicio estrella de NEXOS. **Ojo:** las formulaciones con "ITSE" tienen poca demanda; el gancho de búsqueda es "qué debe tener un tablero eléctrico" y "qué revisa Defensa Civil".

### E4 · ALTA — Mantenimiento de tableros eléctricos (confirma el ★6, con ajuste)
- **Título SEO (58):** Mantenimiento de tableros eléctricos: qué incluye y precio
- **Slug:** `/blog/mantenimiento-de-tableros-electricos/`
- **Búsqueda principal:** mantenimiento de tableros eléctricos
- **Secundarias:** mantenimiento preventivo de tableros eléctricos · qué se hace en un mantenimiento preventivo de tableros eléctricos · checklist de mantenimiento de tableros eléctricos · plan de mantenimiento de tableros eléctricos · informe de mantenimiento de tableros eléctricos · mantenimiento de tableros eléctricos precio / en Lima
- **Intención:** contratar + precio + documento
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿En qué consiste? Dar un checklist: inspección visual, limpieza, reajuste de bornes, medición de tensión y corriente, megado, termografía, rotulado y directorio.
  - ¿Cuál es la diferencia entre preventivo y correctivo en tableros?
  - ¿Cada cuánto conviene hacerlo? No hay norma que fije la frecuencia y "cada cuánto" no sale en el autocompletado, así que basta con un H3. La frecuencia se recomienda por criticidad.
  - ¿Qué informe se entrega?
  - ¿De qué depende el precio?
  - ¿Se puede hacer sin cortar la atención de la tienda o agencia (trabajo nocturno)?
- **Normas / datos:** CNE-Utilización (RM 037-2006-MEM/DM); enlazar a E3 para lo que exige la ITSE.
- **Proyectos NEXOS:** `agencias-scotiabank` (tableros y letreros, trabajo de noche), `inkafarma-belaunde-6`, `vivanda-pezet`, `ct-cusco`.
- **Prioridad:** alta. Tiene evidencia con "en Lima" y "precio". **Ojo:** los 8 primeros resultados en Bing PE son **páginas de servicio**, no guías, así que la página de servicio de Mantenimiento compite directamente (ver §3). Cambio respecto del ★6: quitar "para oficinas y agencias" del título (no tiene evidencia) y llevarlo al cuerpo.

### E5 · MEDIA — Megado de tableros eléctricos (nuevo)
- **Título SEO (≤60):** Megado de tableros eléctricos: qué es y su protocolo (49)
- **Slug:** `/blog/megado-de-tableros-electricos/`
- **Búsqueda principal:** megado de tableros eléctricos
- **Secundarias:** protocolo de megado de tableros · certificado de megado de tableros eléctricos · qué es un megado eléctrico · megado de cables valores · prueba de aislamiento con megóhmetro · formato de megado de tableros
- **Intención:** documento + informarse → contratar las pruebas
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿Qué es megar un tablero?
  - ¿Para qué sirve (entrega de obra, ITSE, mantenimiento)?
  - ¿Qué valores se consideran aceptables?
  - ¿Qué contiene un protocolo de megado? Incluir un modelo propio.
  - ¿Quién lo firma?
  - ¿Con qué equipo se hace?
- **Normas / datos:** **pendiente**. Los valores mínimos de resistencia de aislamiento deben salir del CNE-U o de la IEC 60364-6, y no los verifiqué en una fuente oficial. Que el ingeniero del cliente los entregue.
- **Proyectos NEXOS:** `laboratorio-forense` (armado de tableros con megado), `ct-cusco` (pruebas de resistencia de aislamiento), y los megados de Integratel que cita SERVICIOS-CLIENTE.
- **Prioridad:** media. Hoy lo ganan Scribd y kupdf, con muy poca competencia de contenido real, y a NEXOS le da autoridad técnica. Hay menos demanda de servicio que en pozo a tierra.

### E6 · MEDIA — Niveles de iluminación (lux) y mejora con LED (nuevo)
- **Título SEO (57):** Niveles de iluminación en oficinas y tiendas: lux y norma
- **Slug:** `/blog/niveles-de-iluminacion-lux-oficinas-tiendas/`
- **Búsqueda principal:** nivel de iluminación en oficinas (lux)
- **Secundarias:** cuántos lux debe tener una oficina · niveles de iluminación norma Perú · RM 375-2008-TR iluminación tabla · medición de iluminación con luxómetro · cambio de luminarias fluorescentes a LED · iluminación para tiendas comerciales
- **Intención:** informarse → contratar la mejora de iluminación
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿Cuántos lux exige la norma peruana en oficinas, pasillos y áreas de cómputo?
  - ¿Cómo se mide con un luxómetro?
  - ¿Qué hacer si la medición no llega al mínimo? Cambio a LED, redistribución de luminarias.
  - ¿Cuánto se ahorra al cambiar de fluorescentes a LED? Solo con datos propios del cliente; si no hay, omitir.
  - ¿Cómo iluminar una tienda? Downlights y riel.
- **Normas / datos verificados:**
  - RM 375-2008-TR, Norma Básica de Ergonomía, numeral 31, tabla de niveles mínimos:
    - **50 lux** en pasillos, escaleras e iluminación de emergencia;
    - **300 lux** en aulas y oficinas ("trabajos de oficina");
    - **500 lux** en salas de cómputo, áreas de dibujo y laboratorios;
    - 750 / 1000 / 2000 lux en tareas de precisión.

    Copia del texto: https://www.isem.org.pe/portal/files/recurso/legislacion/disergonomico.pdf. **No encontré la copia en gob.pe:** confirmar en El Peruano antes de publicar.
  - La EM.010 del RNE también fija iluminancias por tipo de local. **No verifiqué los valores vigentes.** Lo único confirmado es que la RM 378-2018-VIVIENDA publicó un *proyecto* de modificación: https://busquedas.elperuano.pe/dispositivo/NL/1710463-1. No citar valores de la EM.010 sin el texto oficial.
- **Proyectos NEXOS:** `adams-megaplaza` (mejora de iluminación con luxómetro), `adams-plaza-lima-sur` (cambio de luminarias), `bbva-oficina-premium-el-polo` (paneles LED, downlights, kit de emergencia), `inkafarma-belaunde-6`.
- **Prioridad:** media. Hay demanda informativa clara ("nivel de iluminación oficinas" da 8 variantes) y está sin dueño peruano fuerte. Hoy rankean páginas de España, México y Colombia, y consultoras de monitoreo de SST. **Riesgo:** atrae a gente de SST que busca el monitoreo, que NEXOS no vende. El CTA debe ofrecer la *mejora* (cambio de luminarias), no el monitoreo.

### E7 · MEDIA-BAJA — Diagrama unifilar y cuadro de cargas para el ITSE
- **Título SEO (49):** Diagrama unifilar y cuadro de cargas para el ITSE
- **Slug:** `/blog/diagrama-unifilar-cuadro-de-cargas-itse/`
- **Búsqueda principal:** diagrama unifilar de tablero eléctrico
- **Secundarias:** qué es un diagrama unifilar y para qué sirve · qué debe contener un diagrama unifilar · diagrama unifilar y cuadro de cargas · diagrama unifilar de un local comercial · plano unifilar de tablero eléctrico
- **Intención:** informarse / documento → contratar los planos
- **Pilar:** `indeci`
- **Preguntas que debe responder:**
  - ¿Qué es y qué debe contener?
  - ¿Por qué lo pide la ITSE (plano de tableros + unifilares + cuadro de cargas firmado por un ingeniero)?
  - ¿Cómo se relaciona con el directorio de circuitos?
  - ¿Qué pasa si el local fue modificado y el diagrama ya no coincide?
- **Normas / datos verificados:** requisito ITSE "Plano de distribución de tableros eléctricos, diagramas unifilares y cuadro de cargas… firmado por ingeniero electricista o mecánico electricista, colegiado y habilitado" (Municipalidad de Comas; URL en E1).
- **Proyectos NEXOS:** `ct-cusco`, `ct-chimbote` y `siemens-energy` (diagramas unifilares y directorios según SERVICIOS-CLIENTE).
- **Prioridad:** media-baja. "diagrama unifilar" tiene mucha demanda, pero de estudiantes y hogar (AutoCAD, "de una casa"), y la versión ITSE da 0 sugerencias. **Alternativa recomendada:** si se quiere menos artículos, convertirlo en un H2 de E3. Lo dejo separado solo porque es un documento que NEXOS entrega y que los competidores no explican.

### E8 · BAJA — Termografía en tableros eléctricos (condicionado)
- **Título SEO (60):** Termografía en tableros eléctricos: qué detecta y su informe
- **Slug:** `/blog/termografia-tableros-electricos/`
- **Búsqueda principal:** termografía en tableros eléctricos
- **Secundarias:** informe de termografía de tableros eléctricos · termografía eléctrica costo · termografía infrarroja en mantenimiento predictivo · qué es la termografía en mantenimiento · mantenimiento predictivo de tableros eléctricos
- **Intención:** informarse + documento
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿Qué detecta (puntos calientes, desbalance, conexiones flojas)?
  - ¿Cuándo hacerla? Con carga.
  - ¿Qué contiene el informe?
  - ¿Cuánto cuesta y de qué depende?
- **Normas:** la búsqueda cita la ANSI/NETA MTS-2017. No está verificada.
- **Proyectos NEXOS:** ninguno en proyectos.json.
- **Prioridad:** baja. **Solo si el cliente confirma que tiene cámara termográfica y fotos propias.** SERVICIOS-CLIENTE dice "mantenimiento predictivo", pero no "termografía". Si no la hace, basta con un H3 en E4.

### E9 · BAJA — Transformador de aislamiento y UPS (opcional)
- **Título SEO (51):** Transformador de aislamiento y UPS: para qué sirven
- **Slug:** `/blog/transformador-de-aislamiento-y-ups/`
- **Búsqueda principal:** transformador de aislamiento para qué sirve
- **Secundarias:** transformador de aislamiento para UPS · qué se hace en un mantenimiento preventivo de UPS · mantenimiento de UPS en Lima · mantenimiento de transformador de aislamiento · cambio de baterías UPS
- **Intención:** informarse
- **Pilar:** `mant`
- **Preguntas que debe responder:**
  - ¿Para qué sirve cada equipo y por qué se usan juntos en agencias y tiendas (cómputo, cajas, CCTV)?
  - ¿Qué incluye su mantenimiento preventivo?
  - ¿Cada cuánto se cambian las baterías?
- **Normas:** ninguna verificada.
- **Proyectos NEXOS:** ninguno de UPS. Las tiendas MASS tienen estabilizador de tensión (`mass-llanos-ate`, `mass-paraiso-pachacamac`…), pero no es lo mismo.
- **Prioridad:** baja. Rankean distribuidores de UPS con marca propia (Etronic, Alka, CELEP, DNP), contra los que es difícil competir, y NEXOS no tiene proyecto que mostrar.

### Descartados como artículo (van como H3 en la página de servicio Mantenimiento)
- **Mantenimiento de letreros luminosos:** solo hay 1 sugerencia; el resto es intención de fabricar o comprar letreros. Mencionarlo con el proyecto `agencias-scotiabank` y `el-chincha` (nueva lona del letrero).
- **Mantenimiento de subestaciones:** hay demanda ("plan", "costo", "normas"), pero no hay ningún proyecto de NEXOS en proyectos.json. Reconsiderar si el cliente aporta un caso real.
- **Tomacorrientes, interruptor diferencial y tablero eléctrico como producto:** intención de compra de hogar (Sodimac, Promart).

### Postura sobre el calendario de docs/SEO.md §5
| # | decisión | motivo |
|---|---|---|
| ★3 Protocolo de medición de pozo a tierra | **Cambiar:** dividirlo en **E1** (certificado/protocolo, `indeci`) y **E2** (mantenimiento, `mant`) | Son dos intenciones distintas, con muchas variantes cada una (43 contra 71 con el truco de letras). Un solo artículo canibalizaría consigo mismo o quedaría superficial |
| ★6 Mantenimiento de tableros eléctricos | **Confirmar con ajuste** → E4 (título sin "oficinas y agencias") | Hay evidencia con "precio" y "en Lima" y muchas variantes de documento (checklist, informe, formato) |
| ★5 Mantenimiento preventivo y correctivo | Sin cambio (no es de mi familia). En E4 basta con un H3 "preventivo y correctivo de tableros" que enlace al ★5 | — |
| #12 Señalización y luces de emergencia | Sin cambio (familia ITSE). E3 enlaza al #12 por el ítem 16 del acta (iluminación de emergencia en la zona de tableros) | — |
| Nuevos | **E3 (alta), E5, E6 y E7 (media), E8 y E9 (baja)** | Ver el detalle arriba |

Orden sugerido para F5: si ★3 se divide, **E1 entra como ★3 y E4 como ★6**. E3 y E2 van primero en el ritmo de 2 artículos al mes.

---

## 3. Riesgos de canibalización

| choque | riesgo | cómo evitarlo |
|---|---|---|
| **E1 / E2 ↔ página de servicio ITSE**. El SEO.md §1 le asigna "protocolo, medición y certificado de pozo a tierra", y la evaluación previa propone el H2 "Medición, mantenimiento y certificado de pozo a tierra en Lima" | **Alto** | Que la página de servicio ataque solo las búsquedas **transaccionales con ciudad**: *pozo a tierra Lima*, *certificado de pozo a tierra en Lima*, *mantenimiento de pozo a tierra en Lima*, *pozo a tierra Ica*. Los artículos se quedan con las **preguntas**: cuánto dura, cuántos ohmios, quién firma, cada cuánto, en qué consiste. Los dos artículos enlazan a la página de servicio con el ancla "medición y certificado de pozo a tierra en Lima" |
| **E2 ↔ página de servicio Mantenimiento** (si también menciona el pozo a tierra) | Medio | Decidir **una** página de servicio dueña del pozo a tierra. La evaluación previa recomienda la de ITSE; Mantenimiento solo enlaza |
| **E1 ↔ E2** | Medio | E1 = documento (certificado, protocolo, ohmios, firma); E2 = trabajo (pasos, materiales, frecuencia, precio). Cada uno remite al otro en el primer párrafo. No repetir "cuántos ohmios" como H2 en E2 (una línea con enlace a E1) |
| **E4 ↔ página de servicio Mantenimiento**. El SEO.md §1 la pone como secundaria con *mantenimiento de tableros eléctricos en Lima* | **Alto** (en Bing PE el top 8 son páginas de servicio) | La página de servicio se queda con *mantenimiento de tableros eléctricos en Lima* (H2, transaccional). E4 apunta a *mantenimiento de tableros eléctricos* + "qué incluye / checklist / precio". E4 no lleva "Lima" en el title ni en el H1, solo en el cuerpo y el CTA |
| **E3 ↔ ★2 (levantamiento de observaciones ITSE)** | Medio | ★2 = el procedimiento general (plazos, solicitud, informe). E3 = solo la parte eléctrica, ítem por ítem. ★2 enlaza a E3 en "observaciones eléctricas" |
| **E3 ↔ E4** | Bajo | E3 = lo que exige la ITSE (cumplimiento). E4 = el mantenimiento (servicio periódico). Enlace cruzado |
| **E3 ↔ E7** | Medio (los dos tratan el directorio de circuitos y los planos) | Si se publica E7, el directorio va en E3 y el unifilar y el cuadro de cargas en E7. Si no se publica, E7 se vuelve un H2 de E3 |
| **E4 ↔ E5 / E8** (megado y termografía como partes del mantenimiento) | Bajo | En E4 basta un párrafo por prueba con enlace al artículo propio |
| **E6 ↔ página de servicio Retail** (iluminación de tiendas) | Bajo | E6 apunta a lux y norma; Retail menciona la iluminación como parte de la implementación |
| **E1 ↔ ★1 (Certificado ITSE)** | Bajo | ★1 lista el certificado de pozo a tierra como requisito y enlaza a E1. No desarrollarlo dentro del ★1 |

---

## 4. Fuentes

**Oficiales (verificadas):**
- CENEPRED, Anexo 9, Acta de Diligencia de ITSE (observaciones 8 a 16 con su artículo del CNE-U): https://www.cenepred.gob.pe/web/wp-content/uploads/Itse/Anexo%202018/Anexo-9-Acta-de-Diligencia-de-ITSE.pdf
- Municipalidad de Comas, requisitos de ITSE: plano de tableros, unifilares y cuadro de cargas; certificado de pozo a tierra de 25 Ω como máximo, anual y firmado por un ingeniero colegiado: https://www.municomas.gob.pe/resources/upload/paginas/licencias/lf/2023/REQUISITOS%20DE%20INSPECCION%20TECNICA%20DE%20SEGURIDAD%20EN%20EDIFICACIONES.pdf
- D.S. 002-2018-PCM, Reglamento de ITSE (El Peruano): https://busquedas.elperuano.pe/dispositivo/NL/1603409-1 · copia en el Congreso: https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_002-2018-pcm.pdf
- Resolución municipal de 2025 que cita la vigencia de 2 años del certificado ITSE (art. 15 del D.S. 002-2018-PCM): https://cdn.www.gob.pe/uploads/document/file/8148779/6822822-resolucion-001746-2025-sgrd.pdf
- RM 037-2006-MEM/DM, Código Nacional de Electricidad – Utilización (texto en FAOLEX): https://faolex.fao.org/docs/pdf/per61737.pdf
- RM 378-2018-VIVIENDA, publicación del proyecto de la EM.010 (El Peruano): https://busquedas.elperuano.pe/dispositivo/NL/1710463-1

**Copias no oficiales (confirmar antes de publicar):**
- RM 375-2008-TR, Norma Básica de Ergonomía (tabla de lux del numeral 31), copia de ISEM: https://www.isem.org.pe/portal/files/recurso/legislacion/disergonomico.pdf

**Competidores y SERP (Bing, mercado Perú, 2026-10-22):**
- Pozo a tierra: https://tvdservicios.pe · https://pozoatierra.org · https://corporaciongroupmen.com · https://www.electrofonperu.pe/blog · https://globalingenieros.com/blog · https://www.kwelectricistas.pe · https://www.yotesalvo.com · https://www.pozosatierra.com · https://prosafetyperu.com · https://administracionedificiosperu.com · https://solux.pe/blog · https://eye.pe/blog · https://reintek.com.pe · https://www.ingenierosdelperu.com · https://grupocasalima.com
- Tableros: https://corporaciongroupmen.com/mantenimiento-de-tableros-electricos-en-lima/ · https://voltiva.group/mantenimiento-de-tableros-electricos-en-lima/ · https://stamerica.com.pe/servicio_instalacion_mantenimiento_tableros_electricos · https://cgrindustrial.pe · https://www.electrofonperu.pe/servicios/tableros-electricos/
- Megado y termografía: https://www.ingenierosdelperu.com · https://www.proyectosfamoca.com · https://sedisaservicios.com · (Scribd, kupdf, Studocu con protocolos)
- Iluminación: https://monitoreo-ocupacional.pe/blog · https://ambisafe.com.pe · https://peiperu.com.pe/blog · https://deltavolt.pe · https://tecnesi-peru.com
- UPS y transformadores: https://www.etronicperu.com · https://alka.com.pe · https://celepperu.com · https://dnp.com.pe · https://www.audax.com.pe · https://geselec-sac.com · https://cda-ingenieros.com
- Subestaciones: https://www.wesler.com.pe · https://www.aeenergy.com.pe · https://www.electrofonperu.pe/blog/mantenimiento-subestaciones-guia
- Letreros: https://letrerosaltorelieve.com · https://iscoimagen.com

**Autocompletado:** `https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=pe&q=<consulta>`, 314 consultas el 2026-10-22.

**Limitaciones:**
- No hay volúmenes; hay que validarlos con Keyword Planner.
- La SERP es de Bing PE, no de Google PE. Sirve para ver quién compite, pero el orden puede diferir.
- No verifiqué en una fuente oficial:
  - el texto literal del CNE-U 060.712;
  - los valores mínimos de megado;
  - las iluminancias de la EM.010;
  - el régimen de detracción del mantenimiento de pozo a tierra.
