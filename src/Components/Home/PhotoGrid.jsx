import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid,Dialog, } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function PictureGrid(props) {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: "black",
      marginRight: 10,
      fontWeight: 600,
      fontSize: 25,
    },
  }));
  const classes = useStyles();
  const [showImage, setShowImage] = useState(null);
  const [showGallaryView, setShowGallaryView] = useState(false);

  var displayGallaryImage = (images) => {
    if (images) {
      // console.log("images", images);
      if (images.length === 1) {
        return (
          <div
            style={{
              backgroundImage: `url(${images[0]}`,
              backgroundSize: "cover",
              width: "100%",
              height: 300,
              marginLeft: 20,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        );
      }
    }
  };

  const isAVideo = (path) => {
    if (path.includes(".mp4") || path.includes(".mov")) {
      return true;
    }
    return false;
  };

  const hasAVideo = (paths) => {
    var hasVideo = false;
    paths.map((path) => {
      if (path.includes(".mp4") || path.includes(".mov")) {
        console.log("checking videos", path);
        hasVideo = true;
      }
    });

    return hasVideo;
  };

  const displayImage = (images) => {
    if (images) {
      // console.log("images", images);
      if (images.length === 1) {
        if (isAVideo(images[0])) {
          return (
            <Grid container direction="row" justifyContent="center">
              <video width="95%" height="400" src={images[0]} controls />
            </Grid>
          );
        } else {
          return (
            <div
              style={{
                backgroundImage: `url(${images[0]}`,
                backgroundSize: "cover",
                width: "100%",
                height: 300,
                // marginLeft: 20,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onDoubleClick={() => {
                setShowImage(images[0]);
              }}
            ></div>
          );
        }
      } else if (images.length === 2) {
        if (hasAVideo(images)) {
          return (
            <Grid container spacing={1}>
              {images.map((image, index) => {
                if (isAVideo(image)) {
                  return (
                    <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                      <Grid container direction="row" justifyContent="center">
                        <video width="100%" height="290" src={image} controls />
                      </Grid>
                    </Grid>
                  );
                }
                return (
                  <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: "auto",
                        height: 200,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      onDoubleClick={() => {
                        setShowImage(image);
                      }}
                    ></Grid>
                  </Grid>
                );
              })}
            </Grid>
          );
        } else {
          return (
            <Grid container spacing={1}>
              {images.map((image, index) => {
                return (
                  <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: "auto",
                        height: 400,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      onDoubleClick={() => {
                        setShowImage(image);
                      }}
                    ></Grid>
                  </Grid>
                );
              })}
            </Grid>
          );
        }
      } else if (images.length === 3) {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  // width: 250,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onDoubleClick={() => {
                  setShowImage(images[0]);
                }}
              ></Grid>
            </Grid>{" "}
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              {images.map((image, index) => {
                if (index != 0) {
                  if (isAVideo(image)) {
                    return (
                      <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Grid container direction="row" justifyContent="center">
                          <video
                            width="100%"
                            height="auto"
                            style={{ maxHeight: 205 }}
                            src={image}
                            controls
                          />
                        </Grid>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        style={{
                          backgroundImage: `url(${image}`,
                          width: "auto",
                          height: 195,
                          borderRadius: 5,
                          marginBottom: 5,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        onDoubleClick={() => {
                          setShowImage(image);
                        }}
                      ></Grid>
                    );
                  }
                }
              })}
            </Grid>
          </Grid>
        );
      } else if (images.length === 4) {
        return (
          <Grid container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  // width: 250,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onDoubleClick={() => {
                  setShowImage(images[0]);
                }}
              ></Grid>
            </Grid>{" "}
            <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
              {images.map((image, index) => {
                if (index != 0) {
                  if (isAVideo(image)) {
                    return (
                      <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                        <Grid container direction="row" justifyContent="center">
                          <video
                            width="100%"
                            height="auto"
                            src={image}
                            controls
                          />
                        </Grid>
                      </Grid>
                    );
                  }
                  return (
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      style={{
                        backgroundImage: `url(${image}`,
                        width: "auto",
                        height: 130,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      onDoubleClick={() => {
                        setShowImage(image);
                      }}
                    ></Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        );
      } else {
        return (
          <Grid  container spacing={1}>
            <Grid item md={6} lg={6} xl={6} xs={12} sm={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                  backgroundImage: `url(${images[0]}`,
                  // width: 250,
                  height: 400,
                  borderRadius: 5,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                onDoubleClick={() => {
                  setShowImage(images[0]);
                }}
              ></Grid>
            </Grid>{" "}
            <Grid item md={6} lg={6} xl={6} xs={12} sm={12}>
              <Grid container  spacing={1}>
                {images.map((image, index) => {
                  if (index != 0) {
                    if (index > 3 && images.length > 5) {
                      if (index === 4) {
                        return (
                          <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: "auto",
                                opacity:'0.4',
                                height: 195,
                                borderRadius: 5,
                                cursor: "pointer",
                                // // marginBottom: 5,
                               backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center", 
                              }}
                            >
                              <a onClick={()=>window.location = '/galeri'}
                              
                                style={{ color: "white",fontSize:'14px',color:'#FDC232' }}
                                className={classes.title}
                              >
                                
                                Lihat Lainnya
                              </a>
                            </Grid>
                          </Grid>
                        );
                      }
                    } else {
                      if (hasAVideo(images) && images.length <= 5) {
                        if (index > 2) {
                          // alert("it coming herer");
                          if (isAVideo(image)) {
                            return (
                              <Grid
                                item
                                md={12}
                                lg={12}
                                xl={12}
                                xs={12}
                                sm={12}
                              >
                                <Grid
                                  container
                                  direction="row"
                                  justifyContent="center"
                                >
                                  <video
                                    width="100%"
                                    height="130"
                                    src={image}
                                    controls
                                  />
                                </Grid>
                              </Grid>
                            );
                          }
                          return (
                            <Grid item md={12} lg={12} xl={12} xs={12} sm={12}>
                              <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                style={{
                                  backgroundImage: `url(${image}`,
                                  width: "auto",
                                  height: 105,
                                  borderRadius: 5,
                                  // marginBottom: 5,
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "center",
                                }}
                                onDoubleClick={() => {
                                  setShowImage(image);
                                }}
                              ></Grid>
                            </Grid>
                          );
                        }
                        return (
                          <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: "auto",
                                height: 155,
                                borderRadius: 5,
                                // marginBottom: 5,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                              onDoubleClick={() => {
                                setShowImage(image);
                              }}
                            ></Grid>
                          </Grid>
                        );
                      } else {
                        return (
                          <Grid item md={6} lg={6} xl={6} xs={6} sm={6}>
                            <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              style={{
                                backgroundImage: `url(${image}`,
                                width: "auto",
                                height: 195,
                                borderRadius: 5,
                                // marginBottom: 5,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              }}
                              onDoubleClick={() => {
                                setShowImage(image);
                              }}
                            ></Grid>
                          </Grid>
                        );
                      }
                    }
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }
  };
  return (
    <div style={{ width: '100%', maxWidth: props.maxWidth }}>
      {showGallaryView === false
        ? displayImage(props.images) != null && (
            <div>{displayImage(props.images)}</div>
          )
        : displayGallaryImage(props.images) != null && (
            <div>{displayGallaryImage(props.images)}</div>
          )}
      {showImage && (
        <Dialog
          // title={"POST"}
          scroll={"body"}
          open={showImage ? true : false}
          onClose={() => {
            setShowImage(null);
          }}
          hideActions={true}
        >
          <Grid container direction="row" justifyContent="center">
            <img style={{ maxWidth: "100%" }} src={showImage}></img>
          </Grid>
        </Dialog>
      )}
    </div>
  );
}