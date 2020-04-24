function Movie_OnStart(){SoundPlay("musica", true);
VideoSetVolume("video",0);


}

function Frame__0_0(ID){Pause();

}

function Frame__1_0(ID){Pause();

}

function BOTONIRASONIDO_OnClick(){GotoSceneNameAndPlay("Scene2",false);
SoundPlay("sboton",false);

}

function Botontogglesonidovideo_OnClick(){VideoSetVolume("video",100);
SoundPlay("sboton",false);

}

function Botontogglesonidovideo_OnRelease(){VideoSetVolume("video",0);
SoundPlay("sboton",false);

}

function Botontogglepausarvideo_OnClick(){VideoPause("video");
SoundPlay("sboton",false);


}

function Botontogglepausarvideo_OnRelease(){VideoResume("video");
SoundPlay("sboton",false);

}

function Botontogglemusicareproduciendo_OnClick(){SoundPlay("musica",true);
SoundPause("musica");
SoundPlay("sboton",false);

}

function Botontogglemusicareproduciendo_OnRelease(){SoundPlay("sboton",false);
SoundResume("musica");

}

function BOTONIRAVIDEO_OnClick(){GotoSceneNameAndPlay("Scene1",0);
SoundPlay("sboton",false);

}

