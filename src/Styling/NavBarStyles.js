export default{
    NavBar:{
        display: 'flex',
        alignItems: 'center',
        justifycontent: 'flex-start',
        width: '100%',
        height: '6vh',
    },
    
    logo:{
        marginRight: '15px',
        padding: '0 13px',
        fontSize: '22px',
        backgroundColor: '#eceff1',
        fontFamily: 'Arial, Helvetica, sans-serif',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        "& a":{
            textDecoration: 'none',
            color: 'black'
        }

    },
    
    select:{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: '1rem',
        justifyContent: 'flex-end',
    },
    slideWrapper:{
        width: '340px',
        margin: '0 10px',
        display: 'inline-block',
        "& rc-slider-track":{
            backgroundColor: 'transparent'
        },
        "& rc-slider-rail":{
            height: '6px'
        },
    }
}