import Typography from "@mui/material/Typography"

const arrayDonaciones = [
    {
        id:1,
        titulo: "MarLimpio: Preservando Nuestros Océanos y Costas",
        fechaInicio: "06/02/2023",
        recaudado: 1500,
        miContribucion: 50,
    },
    {
        id:2,
        titulo: "Lecturitas: Fomentando la Lectura en Niños",
        fechaInicio: "01/01/2022",
        recaudado: 3500,
        miContribucion: 100,
    },
    {
        id:3,
        titulo: "Snacks Nutritivos para un Estilo de Vida Activo",
        fechaInicio: "07/05/2021",
        recaudado: 500,
        miContribucion: 5,
    },
    {
        id:4,
        titulo: "EcoBike: La Bicicleta del Futuro",
        fechaInicio: "01/08/2021",
        recaudado: 10500,
        miContribucion: 1000,
    },
    {
        id:5,
        titulo: "BeeSavers: Salvemos a las Abejas, Salvemos al Planeta",
        fechaInicio: "13/12/2020",
        recaudado: 8500,
        miContribucion: 90,
    },
]

const MisDonaciones = () => {
    const columnStyles = {
      fecha: {
        flexBasis: '10%',
        textAlign: 'left' as const,
        marginLeft: '15%',
        marginBottom: '15px',
      },
      proyecto: {
        flexBasis: '40%',
        textAlign: 'left' as const,
        marginLeft: '20px',
        marginBottom: '15px',
      },
      recaudado: {
        flexBasis: '25%',
        textAlign: 'left' as const,
        marginLeft: '20px',
        marginBottom: '15px',
      },
      contribucion: {
        flexBasis: '25%',
        textAlign: 'left' as const,
        marginLeft: '20px',
        marginBottom: '15px',
      },
    };
  
    const coloredTextStyle = {
      color: '#0B3954',
    };
  
    return (
      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Mis Donaciones
        </Typography>
  
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ ...columnStyles.fecha }}>
            <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
              <strong>Fecha</strong>
            </Typography>
            {arrayDonaciones.map((donacion) => (
              <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
                {donacion.fechaInicio}
              </Typography>
            ))}
          </div>
  
          <div style={{ ...columnStyles.proyecto }}>
            <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
              <strong>Proyecto</strong>
            </Typography>
            {arrayDonaciones.map((donacion) => (
              <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
                {donacion.titulo}
              </Typography>
            ))}
          </div>
  
          <div style={{ ...columnStyles.recaudado }}>
            <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
              <strong>Recaudado hasta la fecha</strong>
            </Typography>
            {arrayDonaciones.map((donacion) => (
              <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
                USD {donacion.recaudado}
              </Typography>
            ))}
          </div>
  
          <div style={{ ...columnStyles.contribucion }}>
            <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
              <strong>Mi contribución</strong>
            </Typography>
            {arrayDonaciones.map((donacion) => (
              <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px',  }}>
                USD {donacion.miContribucion}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  

export default MisDonaciones