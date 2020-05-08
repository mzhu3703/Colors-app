import sizes from './Sizes'

const styles = {
    colorBox: {
        width: '20%',
        height: '25%',
        marginTop: '-6px',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        "&:hover svg": {
            color: 'white',
            transition: "all .2s ease-in-out",
            transform: 'scale(1.2)',
        },
        [sizes.down("large") ] :{
            width: "25%",
            height: '20%'
        },
        [sizes.down("md") ] :{
            width: "50%",
            height: '10%'
        },
        //size for xs
        [sizes.down("xs")] :{
            width: "100%",
            height: "5%"
         
        },

    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        left: '0',
        bottom: '0',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        
       
    },
    icon: {
        position: 'absolute',
        bottom: '0',
        margin: '5px',
        right: '0',
        fontSize: 20,
        color: 'rgba(0,0,0,0.7)',
        
        

    },
}

export default styles;