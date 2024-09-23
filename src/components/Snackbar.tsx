import { Button, Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect } from "react";



function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export function TransitionsSnackbar(props: any) {
  const {open, message, resetSnackbar} = props;


    const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<
        TransitionProps & {
            children: React.ReactElement<any, any>;
        }
        >;
    }>({
        open: open,
        Transition: SlideTransition,
    });

    // const handleClick =
    // (
    //     Transition: React.ComponentType<
    //         TransitionProps & {
    //         children: React.ReactElement<any>;
    //         }
    //     >,
    // ) =>
    // () => {
    // setState({
    //     open: true,
    //     Transition,
    // });
    // console.log('HandleClick function compiled!')
    // };
    
    // useEffect(() => {
    //     handleClick(SlideTransition);
    //     console.log('useEffect complied')
    // }, []);


    function timeout(delay: number) {
      return new Promise( res => setTimeout(res, delay) );
    }

    const handleClose = async () => {
      setState({
        ...state,
        open: false,
      });
        await timeout(1000);
        resetSnackbar()
        console.log('Handleclose compiled')
      };

      return (
        <div>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={message}
            key={state.Transition.name} 
            autoHideDuration={4000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            
            sx={{
              "& .MuiSnackbarContent-root": {
                backgroundColor: "#6e6e6eff", // Custom background color (green in this case)
                color: "#fff", // White text
                fontWeight: "bold", // Make text bold
                borderRadius: "12px", // Rounded corners
                boxShadow: "0 3px 6px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.2)", // Shadow effect
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              },
            }}
          />
        </div>
      );
    }
