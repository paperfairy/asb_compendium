function status() {

    //Allows for rolls from 1-10000.
    roll = Math.floor(Math.random()*10001);

var roll_ift, roll_slp, roll_prz, roll_cfs;

    //There is no mathematical relationship between turns elapsed and percentage success for some statuses.
    //I just used if statements for all of them.
    if (document.statuses.txc_no.value == 0) {
        document.statuses.txc.value = 2;
    }
    if (document.statuses.txc_no.value == 1) {
        document.statuses.txc.value = 4;
    }
    if (document.statuses.txc_no.value == 2) {
        document.statuses.txc.value = 6;
    }
    if (document.statuses.txc_no.value == 3) {
        document.statuses.txc.value = 8;
    }
    if (document.statuses.ift_no.value == 0) {
        roll_ift = 5000;
    }
    if (document.statuses.ift_no.value == 1) {
        roll_ift = 5500;
    }
    if (document.statuses.ift_no.value == 2) {
        roll_ift = 6000;
    }
    if (document.statuses.ift_no.value == 3) {
        roll_ift = 6500;
    }
    if (document.statuses.ift_no.value == 4) {
        roll_ift = 7000;
    }
    if (document.statuses.ift_no.value == 5) {
        roll_ift = 7500;
    }
    if (document.statuses.ift_no.value < 99) {
        document.statuses.descIFT.value = "Infatuation Roll was " + roll + " where any result less than or equal to " + roll_ift + " resulted in (Pokemon) successfully carrying out its orders.";
    }
    if (document.statuses.ift_no.value == 6) {
        roll_ift = 10000;
        document.statuses.descIFT.value = "This Pokémon is no longer infatuated!";
    }
    if (document.statuses.slp_no.value == -1) {
        roll_slp = 2500;
    }
    if (document.statuses.slp_no.value == 0) {
        roll_slp = 0000;
    }
    if (document.statuses.slp_no.value == 1) {
        roll_slp = 3000;
    }
    if (document.statuses.slp_no.value == 2) {
        roll_slp = 4000;
    }
    if (document.statuses.slp_no.value == 3) {
        roll_slp = 5000;
    }
    if (document.statuses.slp_no.value == 4) {
        roll_slp = 6000;
    }
    if (document.statuses.slp_no.value == 5) {
        roll_slp = 7000;
    }
    if (document.statuses.slp_no.value == 6) {
        roll_slp = 8000;
    }
    if (document.statuses.slp_no.value == 7) {
        roll_slp = 9000;
    }
    if (document.statuses.slp_no.value < 99) {
        document.statuses.descSLP.value = "Sleep Roll was " + roll + " where any result less than or equal to " + roll_slp + " resulted in (Pokemon) waking up.";
    }
    if (document.statuses.slp_no.value == 8) {
        roll_slp = 10000;
        document.statuses.descSLP.value = "This Pokémon is no longer asleep!";
    }
    if (document.statuses.prz_no.value == 0) {
        roll_prz = 5000;
    }
    if (document.statuses.prz_no.value == 1) {
        roll_prz = 6500;
    }
    if (document.statuses.prz_no.value == 2) {
        roll_prz = 8000;
    }
    if (document.statuses.prz_no.value == 3) {
        roll_prz = 9500;
    }
    if (document.statuses.prz_no.value < 99) {
        document.statuses.descPRZ.value = "Paralysis Roll was " + roll + " where any result less than or equal to " + roll_prz + " resulted in (Pokemon) successfully carrying out its orders.";
    }
    if (document.statuses.prz_no.value == 4) {
        roll_prz = 10000;
        document.statuses.descPRZ.value = "This Pokémon is cured of Paralysis!";
    }
    if (document.statuses.cfs_no.value == 0) {
        roll_cfs = 5000;
    }
    if (document.statuses.cfs_no.value == 1) {
        roll_cfs = 6500;
    }
    if (document.statuses.cfs_no.value == 2) {
        roll_cfs = 8000;
    }
    if (document.statuses.cfs_no.value == 3) {
        roll_cfs = 9500;
    }
    if (document.statuses.cfs_no.value < 99) {
        document.statuses.descCFS.value = "Confusion Roll was " + roll + " where any result less than or equal to " + roll_cfs + " resulted in (Pokemon) successfully carrying out its orders.";
    }
    if (document.statuses.cfs_no.value == 4) {
        roll_cfs = 10000;
        document.statuses.descCFS.value = "This Pokémon is no longer confused!";
    }
    if (document.statuses.frz_no.value > -1) {
document.statuses.descFRZ.value = "Freeze Roll was " + roll + " where any result less than or equal to " + 3000 + " resulted in (Pokemon) being defrosted.";
}
}
