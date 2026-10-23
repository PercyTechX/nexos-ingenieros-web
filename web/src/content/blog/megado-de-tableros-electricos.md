---
title: 'Megado de tableros eléctricos: qué es y protocolo'
description: 'Qué es el megado de tableros eléctricos, para qué sirve la prueba de aislamiento con megóhmetro, cómo se hace y qué debe decir el protocolo de megado.'
keyword: 'megado de tableros eléctricos'
pillar: mant
date: 2026-10-22
cover: '../../assets/proyectos/laboratorio-forense/galeria-4.webp'
coverAlt: 'Prueba de resistencia de aislamiento con megóhmetro en un tablero eléctrico recién armado'
cta:
  label: 'Pide el megado de tus tableros'
  text: 'Hacemos la prueba de aislamiento de tus tableros y cables y te entregamos el protocolo.'
relatedProjects: ['laboratorio-forense', 'ct-cusco']
draft: true
validatedByClient: false
---

El megado de un tablero eléctrico es la **prueba de resistencia de aislamiento**: con un equipo llamado megóhmetro (o "megger") se aplica una tensión continua entre los conductores, y entre cada conductor y tierra, para comprobar que el aislamiento de los cables no deja escapar corriente. El resultado se expresa en megaohmios (MΩ) y se registra en un **protocolo de megado**. Se hace al entregar una instalación nueva, en el mantenimiento preventivo y cuando se sospecha de una falla.

## ¿Qué es megar un tablero eléctrico?

Todo cable tiene un forro aislante que separa el cobre del resto del mundo. Con el tiempo, el calor, la humedad, los roedores o un mal tendido dañan ese forro. El daño no se ve, pero por ahí empieza a fugarse corriente: primero salta un diferencial "sin razón", después se calienta un tramo, y en el peor caso hay un cortocircuito.

Megar es medir qué tan bueno es ese aislamiento. Cuanto más alto el valor en megaohmios, mejor aislado está el circuito. Un valor bajo, o que baja de una prueba a otra, indica que algo se está deteriorando.

Aunque se habla de "megar el tablero", lo que se prueba en realidad son **los alimentadores y circuitos que salen del tablero**: el cableado desde cada interruptor hasta las cargas.

## ¿Para qué sirve el megado?

### Al entregar una obra o un tablero nuevo

Es la prueba que demuestra que la instalación se entregó sin cables pellizcados ni empalmes mal hechos. En el [Laboratorio Forense Digital de la DIREJCRI – PNP](/proyectos/laboratorio-forense/), en Jesús María, NEXOS armó los tableros eléctricos con sus pruebas de aislamiento (megado), como se ve en la foto de portada.

### En el mantenimiento preventivo

Si megas los mismos circuitos cada año y anotas los valores, puedes ver la tendencia: un circuito que pasa de un valor alto a uno mucho menor está avisando antes de fallar. Por eso el megado es parte del [mantenimiento de tableros eléctricos](/blog/mantenimiento-de-tableros-electricos/).

### Cuando hay una falla que no se explica

Diferenciales que saltan sin motivo, "cosquilleo" en una carcasa o un circuito que se dispara con lluvia. El megado ayuda a encontrar en qué circuito está la fuga.

### Para adecuaciones a la ITSE

El megado no figura como una observación propia en el acta de Defensa Civil, pero suele ser parte de la adecuación de tableros, porque confirma que los circuitos que se reordenan o se canalizan quedan sanos. En el [CT Cusco de Integratel Perú](/proyectos/ct-cusco/) se hicieron pruebas de resistencia de aislamiento junto con el rotulado del directorio de circuitos y la señalización de riesgo eléctrico. Las exigencias de Defensa Civil sobre el tablero están en [tablero eléctrico e ITSE: 9 observaciones](/blog/tablero-electrico-itse-observaciones/).

## ¿Cómo se hace el megado, paso a paso?

1. **Coordinar el corte.** El megado se hace **siempre sin tensión**. En una tienda o agencia, eso significa trabajar fuera del horario de atención.
2. **Desenergizar, bloquear y etiquetar** el tablero, y verificar ausencia de tensión.
3. **Desconectar las cargas sensibles**: equipos electrónicos, UPS, variadores, luminarias LED con driver. La tensión de prueba puede dañarlos.
4. **Abrir los interruptores** de los circuitos a probar.
5. **Medir** con el megóhmetro:
   - entre cada fase y tierra;
   - entre fases;
   - entre cada fase y el neutro, y entre neutro y tierra.
6. **Registrar** cada valor en el protocolo, circuito por circuito, con la tensión de prueba usada.
7. **Descargar** los conductores después de cada prueba (el cable queda cargado como un condensador).
8. **Reconectar** las cargas, reenergizar y verificar.

### ¿Con qué equipo se hace?

Con un **megóhmetro** o probador de aislamiento, analógico o digital, que permite elegir la tensión de prueba. Debe tener su **certificado de calibración vigente**; si no, el protocolo pierde valor. No se puede megar con un multímetro común: su tensión es demasiado baja para revelar un aislamiento deteriorado.

**¿Necesitas el protocolo de megado para entregar una obra o para tu mantenimiento anual? [Cotiza con NEXOS](/?servicio=mant#cotizar) las pruebas de aislamiento de tus tableros.**

## ¿Qué valores de megado son aceptables?

Los valores mínimos de resistencia de aislamiento y las tensiones de prueba según la tensión del circuito están fijados en normas técnicas (el Código Nacional de Electricidad – Utilización y la norma internacional IEC 60364-6, entre otras). <!-- VALIDAR: valores mínimos de resistencia de aislamiento y tensiones de prueba por nivel de tensión, según CNE-U o IEC 60364-6 (no verificados en fuente oficial); que los entregue el ingeniero de NEXOS --> El ingeniero que firma el protocolo debe indicar contra qué criterio compara cada lectura.

Más que un número aislado, fíjate en tres cosas:

- **Que todos los circuitos estén por encima del mínimo** que indica el protocolo.
- **Que no haya un circuito muy por debajo de los demás** del mismo tablero: suele ser el que tiene el problema.
- **Que el valor no caiga mucho respecto de la medición anterior.** La tendencia dice más que la foto.

## ¿Qué debe contener un protocolo de megado?

En internet hay muchos formatos en PDF y Excel. Más que descargar uno, verifica que el tuyo tenga:

| Sección | Qué debe figurar |
|---|---|
| Datos generales | Local, dirección, fecha y nombre del tablero (igual que en el plano) |
| Equipo | Marca, modelo, serie y fecha de calibración del megóhmetro |
| Condiciones | Tensión de prueba aplicada y, si es posible, temperatura y humedad |
| Mediciones | Tabla por circuito: fase-tierra, fase-fase, fase-neutro, neutro-tierra, en MΩ |
| Criterio | Valor mínimo con el que se compara y la norma de referencia |
| Resultado | Conforme o no conforme por circuito |
| Observaciones | Circuitos con valores bajos y acción recomendada |
| Firma | Nombre, firma y número de colegiatura del responsable |

### ¿Quién firma el protocolo de megado?

Lo usual es que lo firme un ingeniero electricista o mecánico electricista colegiado y habilitado, sobre todo si el protocolo forma parte de una entrega de obra o del expediente de la ITSE. <!-- VALIDAR: si existe exigencia normativa de firma de ingeniero colegiado para el protocolo de megado; hoy solo está verificada para el plano de tableros y el certificado de pozo a tierra -->

## ¿Cuánto cuesta el megado de tableros?

Depende de:

- **cuántos tableros y circuitos** hay que probar;
- **si se hace solo o dentro de un mantenimiento** (si el tablero ya está cortado y abierto, megar cuesta menos);
- **el horario** para el corte de energía;
- **si necesitas el protocolo firmado** por ingeniero colegiado;
- **la ubicación**: Lima, Ica o provincia.

<!-- PRECIO CLIENTE: rango referencial de NEXOS por tablero megado con protocolo, solo y dentro de un mantenimiento -->

Si tienes varias tiendas u oficinas, lo más eficiente es incluir el megado en un plan anual. Revisa el servicio de [mantenimiento de locales comerciales](/servicios/mantenimiento-de-locales-comerciales/).

## Preguntas frecuentes

### ¿Megado y prueba de aislamiento son lo mismo?

Sí. "Megado" viene de "megger", la marca que popularizó el megóhmetro. En los documentos técnicos verás "prueba de resistencia de aislamiento".

### ¿Cada cuánto se megan los tableros?

No hay una frecuencia fijada por norma. Lo práctico es hacerlo en cada mantenimiento preventivo de tableros (anual o semestral, según la criticidad) y siempre después de una falla o de una obra que toque el cableado.

### ¿El megado puede dañar mis equipos?

Si no se desconectan antes, sí: la tensión de prueba puede dañar la electrónica. Por eso el procedimiento incluye desconectar equipos sensibles antes de probar.

### ¿Es lo mismo megar que medir el pozo a tierra?

No. El megado mide el aislamiento de los cables; la medición de pozo a tierra mide la resistencia del electrodo con el terreno, con un telurómetro. Lo segundo lo explicamos en [certificado de pozo a tierra](/blog/certificado-de-pozo-a-tierra/).

## Mega tus tableros antes de que fallen

El megado es la forma más simple de saber si el cableado de tu local está sano. NEXOS hace pruebas de aislamiento en tableros y circuitos, con protocolo, en Lima e Ica. [Cotiza con NEXOS](/?servicio=mant#cotizar) o escríbenos por [WhatsApp](https://wa.me/51984387498).

<!-- VALIDAR: ct-cusco figura como pending: true en proyectos.json ([POR CONFIRMAR alcance]); confirmar antes de citarlo -->

<!-- FUENTES: https://faolex.fao.org/docs/pdf/per61737.pdf, https://www.cenepred.gob.pe/web/wp-content/uploads/Itse/Anexo%202018/Anexo-9-Acta-de-Diligencia-de-ITSE.pdf, https://www.municomas.gob.pe/resources/upload/paginas/licencias/lf/2023/REQUISITOS%20DE%20INSPECCION%20TECNICA%20DE%20SEGURIDAD%20EN%20EDIFICACIONES.pdf -->
