

module.exports = {

  getdefs: function(chords) {

    defs = [];

    for (i = 0; i < chords.length; i++) {
      for (j = 0; j < alldefs.length; j++) {
        if (chords[i] == alldefs[j].name && alldefs[j].rank == 0) {
          defs.push(alldefs[j]);
        }
      }
    }

    return defs;
  },

  toString: function(defs) {
    string = "";

    for (i = 0; i < defs.length; i++) {
      string += defs[i].define + "\n";
    }

    return string;
  },

  sort: function() {
    defs = [];

    for (i = 0; i < alldefs.length; i++) {
      defs.push(alldefs[i]);
    }

    defs.sort(function(a,b) { return isGreater(a.name,b.name); });

    return defs;
  }
};

function chordRootIndex(chord) {
  root = "";
  rootIndex = 0;

  for (c = 0; c < chordRoots.length; c++) {
    if (chord.substring(0, chordRoots[c].length) == chordRoots[c] && chordRoots[c].length > root.length) {
      root = chordRoots[c];
      rootIndex = c;
    }
  }

  return rootIndex;
}

function isGreater(c1, c2) {
  result = chordRootIndex(c1) - chordRootIndex(c2);

  if (result == 0 && c1.length != c2.length) {
    if (c1.length < c2.length) {
      result = -1;
    } else {
      result = 1;
    }
  }

  if (result == 0) {
    if (c1 < c2) {
      result = -1;
    } else {
      result = 1;
    }
  }

  return result;
}

var chordRoots = [ "Ab" , "A" , "A#" , "Bb" , "B" , "B#" , "C" , "C#" , "Db" , "D" , "D#" , "Eb" , "E" , "E#" , "Fb" , "F" , "F#" , "Gb" , "G" , "G#" ,
                   "Abm" , "Am" , "A#m" , "Bbm" , "Bm" , "B#m" , "Cm" , "C#m" , "Dbm" , "Dm" , "D#m" , "Ebm" , "Em" , "E#m" , "Fbm" , "Fm" , "F#m" , "Gbm" , "Gm" , "G#m"
]

var alldefs = [
  { rank:0, name:"Ab", define:"{define: Ab base-fret 4 frets 1 3 3 2 1 1}" },
  { rank:0, name:"Ab4", define:"{define: Ab4 base-fret 0 frets x x 1 1 2 4}" },
  { rank:0, name:"Ab7", define:"{define: Ab7 base-fret 0 frets x x 1 1 1 2}" },
  { rank:0, name:"Abdim", define:"{define: Abdim base-fret 0 frets x x 0 1 0 1}" },
  { rank:0, name:"A", define:"{define: A base-fret 0 frets x 0 2 2 2 0}" },
  { rank:0, name:"A4", define:"{define: A4 base-fret 0 frets 0 0 2 2 0 0}" },
  { rank:0, name:"A6", define:"{define: A6 base-fret 0 frets x x 2 2 2 2}" },
  { rank:0, name:"A7", define:"{define: A7 base-fret 0 frets x 0 2 0 2 0}" },
  { rank:0, name:"A9", define:"{define: A9 base-fret 0 frets x 0 2 1 0 0}" },
  { rank:0, name:"A/D", define:"{define: A/D base-fret 0 frets x x 0 0 2 2}" },
  { rank:0, name:"A13", define:"{define: A13 base-fret 5 frets x 0 1 2 3 1}" },
  { rank:0, name:"A/F#", define:"{define: A/F# base-fret 0 frets 2 0 2 2 2 0}" },
  { rank:0, name:"A/G#", define:"{define: A/G# base-fret 0 frets 4 0 2 2 2 0}" },
  { rank:0, name:"Adim", define:"{define: Adim base-fret 0 frets x x 1 2 1 2}" },
  { rank:0, name:"Asus", define:"{define: Asus base-fret 0 frets x x 2 2 3 0}" },
  { rank:0, name:"A#", define:"{define: A# base-fret 0 frets x 1 3 3 3 1}" },
  { rank:0, name:"A#4", define:"{define: A#4 base-fret 0 frets x x 3 3 4 1}" },
  { rank:0, name:"A#7", define:"{define: A#7 base-fret 3 frets x x 1 1 1 2}" },
  { rank:0, name:"A#dim", define:"{define: A#dim base-fret 0 frets x x 2 3 2 3}" },
  { rank:0, name:"Bb", define:"{define: Bb base-fret 0 frets 1 1 3 3 3 1}" },
  { rank:0, name:"Bb6", define:"{define: Bb6 base-fret 0 frets x x 3 3 3 3}" },
  { rank:0, name:"Bb9", define:"{define: Bb9 base-fret 6 frets 1 3 1 2 1 3}" },
  { rank:0, name:"B", define:"{define: B base-fret 0 frets x 2 4 4 4 2}" },
  { rank:0, name:"B4", define:"{define: B4 base-fret 2 frets x x 3 3 4 1}" },
  { rank:0, name:"B7", define:"{define: B7 base-fret 0 frets x 2 1 2 0 2}" },
  { rank:0, name:"B9", define:"{define: B9 base-fret 7 frets 1 3 1 2 1 3}" },
  { rank:0, name:"B13", define:"{define: B13 base-fret 0 frets x 2 1 2 0 4}" },
  { rank:0, name:"B/F#", define:"{define: B/F# base-fret 0 frets 0 4 4 4 0 0}" },
  { rank:0, name:"C", define:"{define: C base-fret 0 frets x 3 2 0 1 0}" },
  { rank:0, name:"C4", define:"{define: C4 base-fret 0 frets x x 3 0 1 3}" },
  { rank:0, name:"C7", define:"{define: C7 base-fret 0 frets x 3 2 0 3 0}" },
  { rank:0, name:"C9", define:"{define: C9 base-fret 8 frets 1 3 1 2 1 3}" },
  { rank:0, name:"C/B", define:"{define: C/B base-fret 0 frets x 2 2 0 1 0}" },
  { rank:0, name:"C11", define:"{define: C11 base-fret 3 frets x 1 3 1 4 1}" },
  { rank:0, name:"Cadd9", define:"{define: Cadd9 base-fret 0 frets x 3 2 0 3 0}" },
  { rank:0, name:"Csus2", define:"{define: Csus2 base-fret 0 frets x 3 0 0 1 x}" },
  { rank:0, name:"Csus9", define:"{define: Csus9 base-fret 7 frets x x 4 1 2 4}" },
  { rank:0, name:"C#", define:"{define: C# base-fret 4 frets x 1 3 3 3 1}" },
  { rank:0, name:"C#4", define:"{define: C#4 base-fret 4 frets x x 3 3 4 1}" },
  { rank:0, name:"C#7", define:"{define: C#7 base-fret 0 frets x x 3 4 2 4}" },
  { rank:0, name:"C#add9", define:"{define: C#add9 base-fret 4 frets x 1 3 3 1 1}" },
  { rank:0, name:"D", define:"{define: D base-fret 0 frets x 0 0 2 3 2}" },
  { rank:0, name:"D6", define:"{define: D6 base-fret 0 frets x 0 0 2 0 2}" },
  { rank:0, name:"D7", define:"{define: D7 base-fret 0 frets x 0 0 2 1 2}" },
  { rank:0, name:"D9", define:"{define: D9 base-fret 4 frets x 2 1 2 2 2}" },
  { rank:0, name:"Dsus2", define:"{define: Dsus2 base-fret 0 frets x x 0 2 3 0}" },
  { rank:0, name:"D#", define:"{define: D# base-fret 6 frets x 1 3 3 3 1}" },
  { rank:0, name:"Ebadd9", define:"{define: Ebadd9 base-fret 0 frets x 1 1 3 4 1}" },
  { rank:0, name:"E", define:"{define: E base-fret 0 frets 0 2 2 1 0 0}" },
  { rank:0, name:"E5", define:"{define: E5 base-fret 7 frets 0 1 3 3 0 0}" },
  { rank:0, name:"E6", define:"{define: E6 base-fret 9 frets x x 3 3 3 3}" },
  { rank:0, name:"E7", define:"{define: E7 base-fret 0 frets 0 2 2 1 3 0}" },
  { rank:0, name:"E9", define:"{define: E9 base-fret 0 frets 1 3 1 2 1 3}" },
  { rank:0, name:"E11", define:"{define: E11 base-fret 7 frets 1 1 1 1 2 2}" },
  { rank:0, name:"E7#9", define:"{define: E7#9 base-fret 0 frets 0 2 2 1 3 3}" },
  { rank:0, name:"E7b9", define:"{define: E7b9 base-fret 0 frets 0 2 0 1 3 2}" },
  { rank:0, name:"Esus", define:"{define: Esus base-fret 0 frets 0 2 2 2 0 0}" },
  { rank:0, name:"Esus4", define:"{define: Esus4 base-fret 0 frets 0 2 2 2 0 0}" },
  { rank:0, name:"F", define:"{define: F base-fret 0 frets 1 3 3 2 1 1}" },
  { rank:0, name:"F4", define:"{define: F4 base-fret 0 frets x x 3 3 1 1}" },
  { rank:0, name:"F6", define:"{define: F6 base-fret 0 frets x 3 3 2 3 x}" },
  { rank:0, name:"F7", define:"{define: F7 base-fret 0 frets 1 3 1 2 1 1}" },
  { rank:0, name:"F9", define:"{define: F9 base-fret 0 frets 2 4 2 3 2 4}" },
  { rank:0, name:"F/A", define:"{define: F/A base-fret 0 frets x 0 3 2 1 1}" },
  { rank:0, name:"F/C", define:"{define: F/C base-fret 0 frets x x 3 2 1 1}" },
  { rank:0, name:"F/G", define:"{define: F/G base-fret 0 frets 3 3 3 2 1 1}" },
  { rank:0, name:"F11", define:"{define: F11 base-fret 0 frets 1 3 1 3 1 1}" },
  { rank:0, name:"F7/A", define:"{define: F7/A base-fret 0 frets x 0 1 2 1 1}" },
  { rank:0, name:"Fadd9", define:"{define: Fadd9 base-fret 0 frets 3 0 3 2 1 1}" },
  { rank:0, name:"Fsus2", define:"{define: Fsus2 base-fret 0 frets x 3 3 0 1 1}" },
  { rank:0, name:"Fsus4", define:"{define: Fsus4 base-fret 0 frets 1 3 3 3 1 1}" },
  { rank:0, name:"Fsus2/C", define:"{define: Fsus2/C base-fret 0 frets x 3 3 0 1 1}" },
  { rank:0, name:"F#", define:"{define: F# base-fret 0 frets 2 4 4 3 2 2}" },
  { rank:0, name:"F#4", define:"{define: F#4 base-fret 0 frets x x 4 4 2 2}" },
  { rank:0, name:"F#7", define:"{define: F#7 base-fret 0 frets x x 4 3 2 0}" },
  { rank:0, name:"F#9", define:"{define: F#9 base-fret 0 frets x 1 2 1 2 2}" },
  { rank:0, name:"F#/E", define:"{define: F#/E base-fret 0 frets 0 4 4 3 2 2}" },
  { rank:0, name:"F#11", define:"{define: F#11 base-fret 0 frets 2 4 2 4 2 2}" },
  { rank:0, name:"Gb", define:"{define: Gb base-fret 0 frets 2 4 4 3 2 2}" },
  { rank:0, name:"Gb7", define:"{define: Gb7 base-fret 0 frets x x 4 3 2 0}" },
  { rank:0, name:"Gb9", define:"{define: Gb9 base-fret 0 frets x 1 2 1 2 2}" },
  { rank:0, name:"Gbdim", define:"{define: Gbdim base-fret 0 frets x x 1 2 1 2}" },
  { rank:0, name:"Gbsus4", define:"{define: Gbsus4 base-fret 0 frets x x 4 4 2 2}" },
  { rank:0, name:"G", define:"{define: G base-fret 0 frets 3 2 0 0 0 3}" },
  { rank:0, name:"G6", define:"{define: G6 base-fret 0 frets 3 2 0 0 0 0}" },
  { rank:0, name:"G7", define:"{define: G7 base-fret 0 frets 3 2 0 0 0 1}" },
  { rank:0, name:"G9", define:"{define: G9 base-fret 0 frets 3 x 0 2 0 1}" },
  { rank:0, name:"G/A", define:"{define: G/A base-fret 0 frets x 0 0 0 0 3}" },
  { rank:0, name:"G/B", define:"{define: G/B base-fret 0 frets x 2 0 0 0 3}" },
  { rank:0, name:"G/D", define:"{define: G/D base-fret 4 frets x 2 2 1 0 0}" },
  { rank:0, name:"G11", define:"{define: G11 base-fret 0 frets 3 x 0 2 1 1}" },
  { rank:0, name:"G7b9", define:"{define: G7b9 base-fret 0 frets x x 0 1 0 1}" },
  { rank:0, name:"GD11", define:"{define: D11 base-fret 5 frets x 1 1 1 1 1}" },
  { rank:0, name:"Gdim", define:"{define: Gdim base-fret 0 frets x x 2 3 2 3}" },
  { rank:0, name:"Gsus4", define:"{define: Gsus4 base-fret 0 frets x x 0 0 1 1}" },
  { rank:0, name:"G6sus4", define:"{define: G6sus4 base-fret 0 frets 0 2 0 0 1 0}" },
  { rank:0, name:"G7sus4", define:"{define: G7sus4 base-fret 0 frets 3 3 0 0 1 1}" },
  { rank:0, name:"G#", define:"{define: G# base-fret 4 frets 1 3 3 2 1 1}" },
  { rank:0, name:"Abm", define:"{define: Abm base-fret 4 frets 1 3 3 1 1 1}" },
  { rank:0, name:"Abm7", define:"{define: Abm7 base-fret 4 frets x x 1 1 1 1}" },
  { rank:0, name:"Abmaj7", define:"{define: Abmaj7 base-fret 0 frets x x 1 1 1 3}" },
  { rank:0, name:"Am", define:"{define: Am base-fret 0 frets x 0 2 2 1 0}" },
  { rank:0, name:"Am6", define:"{define: Am6 base-fret 0 frets x 0 2 2 1 2}" },
  { rank:0, name:"Am7", define:"{define: Am7 base-fret 0 frets x 0 2 0 1 0}" },
  { rank:0, name:"Am9", define:"{define: Am9 base-fret 5 frets x 0 1 1 1 3}" },
  { rank:0, name:"Am/G", define:"{define: Am/G base-fret 0 frets 3 0 2 2 1 0}" },
  { rank:0, name:"Am/F#", define:"{define: Am/F# base-fret 0 frets 2 0 3 3 2 0}" },
  { rank:0, name:"Amaj7", define:"{define: Amaj7 base-fret 0 frets x 0 2 1 2 0}" },
  { rank:0, name:"A#m", define:"{define: A#m base-fret 0 frets x 1 3 3 2 1}" },
  { rank:0, name:"A#m7", define:"{define: A#m7 base-fret 0 frets x 1 3 1 2 1}" },
  { rank:0, name:"A#maj7", define:"{define: A#maj7 base-fret 0 frets x 1 3 2 3 x}" },
  { rank:0, name:"Bbm9", define:"{define: Bbm9 base-fret 6 frets x x x 1 1 3}" },
  { rank:0, name:"Bm", define:"{define: Bm base-fret 0 frets x 2 4 4 3 2}" },
  { rank:0, name:"Bm6", define:"{define: Bm6 base-fret 0 frets x x 4 4 3 4}" },
  { rank:0, name:"Bm7", define:"{define: Bm7 base-fret 2 frets x 1 3 1 2 1}" },
  { rank:0, name:"Bmaj", define:"{define: Bmaj base-fret 0 frets x 2 4 3 4 x}" },
  { rank:0, name:"Cm", define:"{define: Cm base-fret 3 frets x 1 3 3 2 1}" },
  { rank:0, name:"Cm7", define:"{define: Cm7 base-fret 3 frets x 1 3 1 2 1}" },
  { rank:0, name:"Cm11", define:"{define: Cm11 base-fret 3 frets x 1 3 1 4 x}" },
  { rank:0, name:"Cmaj7", define:"{define: Cmaj7 base-fret 0 frets x 3 2 0 0 0}" },
  { rank:0, name:"C#m", define:"{define: C#m base-fret 4 frets x 1 3 3 2 1}" },
  { rank:0, name:"C#m7", define:"{define: C#m7 base-fret 4 frets x 1 3 1 2 1}" },
  { rank:0, name:"Dm", define:"{define: Dm base-fret 0 frets x 0 0 2 3 1}" },
  { rank:0, name:"Dm6", define:"{define: Dm6 base-fret 0 frets x 0 0 2 0 1}" },
  { rank:0, name:"Dm7", define:"{define: Dm7 base-fret 0 frets x 0 0 2 1 1}" },
  { rank:0, name:"Dm9", define:"{define: Dm9 base-fret 3 frets x 3 1 3 3 3}" },
  { rank:0, name:"Dm11", define:"{define: Dm11 base-fret 0 frets x 0 0 0 1 1}" },
  { rank:0, name:"Dm13", define:"{define: Dm13 base-fret 0 frets x 3 3 2 0 0}" },
  { rank:0, name:"Em", define:"{define: Em base-fret 0 frets 0 2 2 0 0 0}" },
  { rank:0, name:"Em6", define:"{define: Em6 base-fret 0 frets 0 2 2 0 2 0}" },
  { rank:0, name:"Em7", define:"{define: Em7 base-fret 0 frets 0 2 0 0 0 0}" },
  { rank:0, name:"Em9", define:"{define: Em9 base-fret 0 frets 0 2 0 0 0 2}" },
  { rank:0, name:"Em/B", define:"{define: Em/B base-fret 0 frets x 2 2 0 0 0}" },
  { rank:0, name:"Em/D", define:"{define: Em/D base-fret 0 frets x x 0 0 0 0}" },
  { rank:0, name:"Emaj7", define:"{define: Emaj7 base-fret 0 frets 0 2 1 1 0 x}" },
  { rank:0, name:"Emadd9", define:"{define: Emadd9 base-fret 0 frets 0 2 4 0 0 0}" },
  { rank:0, name:"Emsus4", define:"{define: Emsus4 base-fret 0 frets 0 0 2 0 0 0}" },
  { rank:0, name:"Fm", define:"{define: Fm base-fret 0 frets 1 3 3 1 1 1}" },
  { rank:0, name:"Fm6", define:"{define: Fm6 base-fret 0 frets x x 0 1 1 1}" },
  { rank:0, name:"Fm7", define:"{define: Fm7 base-fret 0 frets 1 3 1 1 1 1}" },
  { rank:0, name:"Fmaj7", define:"{define: Fmaj7 base-fret 0 frets x 3 3 2 1 0}" },
  { rank:0, name:"Fmmaj7", define:"{define: Fmmaj7 base-fret 0 frets x 3 3 1 1 0}" },
  { rank:0, name:"Fmaj7/A", define:"{define: Fmaj7/A base-fret 0 frets x 0 3 2 1 0}" },
  { rank:0, name:"F#m", define:"{define: F#m base-fret 0 frets 2 4 4 2 2 2}" },
  { rank:0, name:"F#m6", define:"{define: F#m6 base-fret 0 frets x x 1 2 2 2}" },
  { rank:0, name:"F#m7", define:"{define: F#m7 base-fret 0 frets 2 4 2 2 2 2}" },
  { rank:0, name:"F#maj7", define:"{define: F#maj7 base-fret 0 frets x x 4 3 2 1}" },
  { rank:0, name:"Gbm", define:"{define: Gbm base-fret 0 frets 2 4 4 2 2 2}" },
  { rank:0, name:"Gbm7", define:"{define: Gbm7 base-fret 0 frets x x 4 3 3 2}" },
  { rank:0, name:"Gbmin", define:"{define: Gbmin base-fret 0 frets 2 4 4 2 2 2}" },
  { rank:0, name:"Gbmaj7", define:"{define: Gbmaj7 base-fret 0 frets x x 4 3 2 1}" },
  { rank:0, name:"Gm", define:"{define: Gm base-fret 3 frets 1 3 3 1 1 1}" },
  { rank:0, name:"Gm6", define:"{define: Gm6 base-fret 0 frets x x 2 3 3 3}" },
  { rank:0, name:"Gm7", define:"{define: Gm7 base-fret 3 frets 1 3 1 1 1 1}" },
  { rank:0, name:"Gm/Bb", define:"{define: Gm/Bb base-fret 4 frets 3 2 2 1 0 0}" },
  { rank:0, name:"Gmaj7", define:"{define: Gmaj7 base-fret 0 frets 3 2 0 0 0 2}" },
  { rank:0, name:"G#m7", define:"{define: G#m7 base-fret 4 frets 1 3 1 1 1 1}" }
]
