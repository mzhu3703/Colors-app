import sizes from "./Sizes";
//styles for each individual color palette
export default {
    Palette:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors:{
        height:'90%',
    },
    goBack:{
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom:'-3.5px',
        opacity: '1',
        backgroundColor : "black",
        "& a":{
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255,0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            opacity: '1',
            textDecoration: 'none',
            color: 'white',
        },
        [sizes.down("large")] :{
            width: "25%",
            height: "33%",
        },
        [sizes.down("md")] :{
            width: "50%",
            height: "20%",
        },
        [sizes.down("xs")] :{
            width: "100%",
            height: "10%",
        },
        
    }
}