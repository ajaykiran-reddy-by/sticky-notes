import { Button, Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect } from "react";



function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="up" />;
}

export function TransitionsSnackbar() {
    const [state, setState] = React.useState<{
        open: boolean;
        Transition: React.ComponentType<
        TransitionProps & {
            children: React.ReactElement<any, any>;
        }
        >;
    }>({
        open: false,
        Transition: Slide,
    });

    const handleClick =
    (
        Transition: React.ComponentType<
            TransitionProps & {
            children: React.ReactElement<any, any>;
            }
        >,
    ) =>
    () => {
    setState({
        open: true,
        Transition,
    });
    console.log('HandleClick function compiled!')
    };
    
    useEffect(() => {
        handleClick(SlideTransition);
        console.log('useEffect complied')
    }, []);

    const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
        console.log('Handleclose compiled')
      };

      return (
        <div>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message="Succeffully Created a card"
            key={state.Transition.name}
            autoHideDuration={4000}
          />
        </div>
      );
    }
