import chroma from "chroma-js";

export default {
    colorBox:{
        width: '20%',
        height: props => 
            props.showFullPalette === true ? '25%': '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom:'-3.5px',
        '&:hover button':{
            opacity: '1',
            transition: 'all .3s ease-in-out'
        }
    },
    //changes the luminosity when copying palette
    copyText:{
        color: props =>
        chroma(props.color).luminance() > 0.7 ? "black" : "white"
    },
    colorText:{
        color: props => chroma(props.color).luminance() <= 0.08 ?  "white" : "black"
    },
    boxContent:{
        position: 'absolute',
        padding: '10px',
        left: '0',
        bottom: '0',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        width: '50px',
    },
    moreButton:{
        color: props =>
        chroma(props.color).luminance() > 0.7 ? "rgba(0,0,0,0.6)" : "white",
        position: "absolute",
        bottom: "0",
        right: "0",
        background: "rgba(255,255,255,0.3)",
        fontSize: "12px",
        padding: "10px",
        height: "5%",
        textAlign: "center",
        transition: "all .2s ease-in-out"
    },
    copyButton:{
        color: props =>
        chroma(props.color).luminance() > 0.7 ? "rgba(0,0,0,0.6)" : "white",
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
        opacity: '0',
        
    },

    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 1.2s ease-in-out',
        transform: 'scale(0.1)',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMessage:{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        flexDirection: 'column',
        transform: 'scale(0.01)',
        color: 'white',
        opacity: '0',
        "& h1":{
            fontWeight: '400',
            textShadow: '1px 2px black',
            background: 'rgba(255,255,255,0.2)',
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
            textTransform: 'uppercase',
            marginBottom: '0',
        }
    },
    showCopyMessage:{
        opacity: '1',
        zIndex: '25',
        transition: 'all 0.5s ease-in-out',
        transitionDelay:'0.3s',
        transform: 'scale(2)',
    }




}