import sizes from './Sizes'
import bg from '/home/michael/colors-app/colors-app/src/Styling/bg.svg'
export default {
    //global so the classNames arent prefixed with the component name
    "@global":{
        
        ".fade-exit":{
        opacity: 1,    
        },
        ".fade-exit-active":{
            opacity: 0,
            transition: 'opacity 500ms ease-in',
        }
    },
    root: {
        backgroundColor: '#131faa',
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: `url(${bg})`,
        /* background by SVGBackgrounds.com */
        overflow: 'scroll',

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")] :{
            width: "80%",
        },
        

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "spacebetween",
        alignItems: 'center',
        color:'white',
        "& a":{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            marginRight: '60px',
            marginLeft: 'auto',
            [sizes.down("xl")] :{
                marginRight: '60px',
            },
            [sizes.down("md")] :{
                marginRight: '20px',
            },
            [sizes.down("xs")] :{
                marginRight: '15px',
            },
        }
            
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "1.5rem",
        [sizes.down("md")] :{
            gridTemplateColumns: "repeat(2,50%)",
            gridGap: "2%",
        },
        [sizes.down("xs")] :{
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "2%",
        },

    },
    deleteTitle:{
       marginBottom: '-15px',
    },
    buttonWrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    checkButton:{
        width: '100%',
        padding: '10px',
    },
    closeButton:{
        width: '100%',
        padding: '10px',
    },
    check:{
        color: 'green',
        marginRight: '10px',
    },
    close:{
        color: 'red',
        marginRight: '10px',
    }
}