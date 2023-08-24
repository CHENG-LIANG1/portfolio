import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import './project.css'
import Slide from "@mui/material/Slide";
import {createTheme, ThemeProvider} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectCard = (props) => {

  const {image, description, title, child} = props;
  const [open, setOpen] = React.useState(false);
  const bgColor = '#111';
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          root: {
            backgroundColor: bgColor
          },
          scrollBody: {
            backgroundColor: bgColor
          },
          paper: {
            backgroundColor: bgColor
          }
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: bgColor,
            boxShadow: "none"
          }
        }
      }
    },
  });
  return (
    <div>
      <div className={'card-container'} onClick={handleClickOpen}>
        <img src={image} alt={description}/>
        <div className={'card-title'}>{title}</div>
        <div className={'card-description'}>{description}</div>
        <div className={'read-more'}>Learn more</div>
      </div>
      <div style={{padding: 20}}>

        <ThemeProvider theme={theme}>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>

            {child}


            <div className={'credit-container'}>
              <div className={'split-line'}> </div>
              I acknowledge the use of ChatGPT (https://chat.openai.com/) to refine my wording and grammar. The prompts used include:
              proofread
              check my grammar</div>
          </Dialog>
        </ThemeProvider>

      </div>

    </div>
  );

}

export default ProjectCard;