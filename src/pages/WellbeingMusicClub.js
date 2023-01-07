import React from "react";
import Christmas from "../images/WMC_Christmas.png";
import Hospital from "../images/WMC_hospital.jpg";
import SpecialNeedsChoir from "../images/WMC_special_needs_choir.jpg";
import StayAndPlay from "../images/WMC_stay_play.png";

function WellbeingMusicClub() {
  return (
    <div>
      <img
        src={Christmas}
        height={300}
        alt="group of people wearing Christmas hats and singing outdoors"
      />
      <img
        src={Hospital}
        height={300}
        alt="Nina visiting a patient in hospital"
      />
      <img
        src={SpecialNeedsChoir}
        height={300}
        alt="group of people with special needs singing together"
      />
      <img
        src={StayAndPlay}
        height={300}
        alt="young children and their grandparents wearing fancy dress whilst Nina plays the guitar wearing a viking hat"
      />
      <h1>WELLBEING MUSIC CLUB</h1>
      <p>
        Music is rewarding, it’s uplifting and distracting, it can help reduce
        stress, develop social and language skills and can provide a positive
        focus when needed.
      </p>
      <p>
        The Wellbeing Music Club provides a fulfilling and happy environment to
        make music in groups. This can happen in a number of ways and settings,
        for example is a primary school supporting a term’s topic through music,
        in nursing homes where musical memory is so often better preserved than
        other memory loss or on hospital wards to distract and reduce stress for
        people of all walks of life; to challenge a young person to put their
        anxieties into the lyrics of their own song, to encourage a group of
        asylum seekers to produce their native music to feel reconnected to
        their past, to bring different generations together to enjoy each
        other’s company and to share favourite music from across the ages.
      </p>
      <p>
        Hans Christian Anderson said, “Where words fail, music speaks,” and this
        is never as obvious as when verbal communication is a challenge, in
        settings where members of a group have additional needs. Makaton signing
        is an expressive and helpful tool to enhance the singing experience and
        Nina is a level 2 trained Makaton signer. Music and singing workshops
        for people with additional needs are part of the Wellbeing Music service
        and they are always creative, expressive and enjoyable.
      </p>
      <p>
        The Wellbeing Music Club can happen wherever “the good that music can
        do” will enhance the experience of the users of the service. Nursing
        homes, nurseries, primary schools, charities, community services and
        events, hospitals and healthcare centres would benefit from the
        wellbeing, self-confidence, concentration, collaboration, talent and
        enjoyment that making music together can bring.
      </p>
      <p>
        Sessions can include singing games, percussion workshops, glockenspiel
        work, Makaton signing and singing sessions, composition and group
        singing for fun or towards a performance. Our sound system is also
        available to elevate any events your setting might have.
      </p>
      <p>
        Get in touch for more information on how to bring the Wellbeing Music
        Club to your setting or service.
      </p>
    </div>
  );
}

export default WellbeingMusicClub;
