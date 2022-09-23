
function dropdownChange(e) {

  const display = document.getElementById("display-el");
  const recorded_sp = Number(document.getElementById("recorded-speed").value);
  const limits = parseInt(document.getElementById("speed-limits").value);
  const license = document.getElementById("driving-license").value;
  const points = Number(document.getElementById("DL-points").value);
  const paperwork = document.getElementById("paperwork").value;
  const towing = document.getElementById("towing-trailer").value;
  const vehicle = document.getElementById("L-H-P").value;
  const carriage = document.getElementById("carriage-capacity").value;
  const place = document.getElementById("near-school").value;
  const conditions = document.getElementById("conditions").value;
  const passengers = document.getElementById("passengers").value;
  const driving_for = document.getElementById("driving-for").value;


console.log(recorded_sp)
console.log(limits)
  if (
   (((limits === 20 || limits === 30 ) && recorded_sp === 10 )  ||
    ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
    ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
    license === "Over 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
      (paperwork === "None, just stopped or flashed by camera" ||
        paperwork === "Notice of intended prosecution") &&
      towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
      carriage === "- - -"
      )
  {
    console.log('condition 1')
    display.textContent =
      "You are within the range for the police to exercise their discretion and you may be offered a fixed penalty notice £100 3 points OR a speed awareness course. If you have received your notice of intended prosecution you should complete the driver information on the S172 notice and explain you are within the range and say you are willing to do a speed awareness course Please note that you will not usually be offered a speed awareness course if you have completed one in the past 3 years.";
  }
  
   else if (
     (((limits === 20 || limits === 30) && recorded_sp === 10 )  ||
      ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
      ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
      license === "Less than 2 years" &&
        (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
        (paperwork === "None, just stopped or flashed by camera" ||
          paperwork === "Notice of intended prosecution") &&
          towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
          carriage === "- - -")
    {
      console.log('condition 1')
      display.textContent =
        "You are within the range for the police to exercise their discretion and you may be offered a fixed penalty notice £100 3 points OR a speed awareness course. If you have received your notice of intended prosecution you should complete the driver information on the S172 notice and explain you are within the range and say you are willing to do a speed awareness course Please note that you will not usually be offered a speed awareness course if you have completed one in the past 3 years.If you are a new driver then you should always take the opportunity to do the course as you need to avoid points because if you get 6 points on your driving record your full driving licence will be revoked.";
    }else if (
     (((limits === 20 || limits === 30) && recorded_sp === 10 )  ||
      ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
      ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
      license === "Over 2 years" &&
        (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
        paperwork === "Fixed penalty notice"  &&
        towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
       carriage === "- - -")
    {
      console.log('condition 3')
      display.textContent = "If you have been offered  a fixed penalty notice for £100 and 3 points then you should accept this immediately if you have accepted that you are the driver. It is the most cost effective way of dealing with the offence other than a speed awareness course.  If you ignore the offer of a fixed penalty or do not accept it then the matter will go to court and you will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
     }else if (
       (((limits === 20 || limits === 30) && recorded_sp === 10 )  ||
        ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
        ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
        license === "Less than 2 years" &&
          (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
          paperwork === "Fixed penalty notice"  &&
          towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
       carriage === "- - -")
      {
        console.log('condition 4')
        display.textContent = "If you have been offered  a fixed penalty notice for £100 and 3 points then you should accept this immediately if you have accepted that you are the driver. It is the most cost effective way of dealing with the offence other than a speed awareness course.  If you ignore the offer of a fixed penalty or do not accept it then the matter will go to court and you will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine.If you are a new driver then you should not accept the fixed penalty if you have already accepted one and this is your second. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. If it is your second fixed penalty call us straight away for some FREE advice."
       }else if (
         (((limits === 20 || limits === 30) && recorded_sp === 10 )  ||
          ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
          ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
          license === "Over 2 years" &&
            (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
            paperwork === "Single justice procedure notice"  &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
       carriage === "- - -")
        {
          console.log('condition 5')
          display.textContent="If you have received your single justice procedure notice then You will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
           }else if (
             (((limits === 20 || limits === 30) && recorded_sp === 10 )  ||
              ((limits === 40 || limits === 50) && recorded_sp === 15 ) ||
              ((limits === 60 || limits === 70) && recorded_sp === 20 )) &&
              license === "Less than 2 years" &&
                (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                paperwork === "Single justice procedure notice"  &&
                towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
       carriage === "- - -")
            {
              console.log('condition 6')
              display.textContent="If you have received your single justice procedure notice then You will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine.If this is your second offence having accepted a fixed penalty then you should ask for a court hearing unless you are happy for the DLVA to revoke your driving licence. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us for FREE advice."
               }
               else if (
                (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                 ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                 ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                 license === "Over 2 years" &&
                   (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                   (paperwork === "None, just stopped or flashed by camera" ||
                  paperwork === "Notice of intended prosecution")  &&
                   towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
          carriage === "- - -")
               {
                console.log('condition 7')
                 display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 day disqualification. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine."
                  }else if (
                    (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                 ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                 ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                     license === "Less than 2 years" &&
                       (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                       (paperwork === "None, just stopped or flashed by camera" ||
                      paperwork === "Notice of intended prosecution")  &&
                       towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
                   {
                    console.log('condition 8')
                     display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 day disqualification. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine. If you are a new driver then you should always respond straight away to the NIP if you fail you will be prosecuted. As the penalty has a range of points 4 -6 if the court award 6 points the DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us straight away for some FREE advice"
                      }
                      
                      else if (
                        (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                 ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                 ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                         license === "Over 2 years" &&
                           (points ==="None" || points === 3 || points === 4 || points === 5) &&
                           paperwork === "Fixed penalty notice" &&
                           towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
                  carriage === "- - -")
                       {
                        console.log('condition 9')
                         display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 days disqualification.. If they wish to consider a disqualification they will send you a notice of disqualification which you can accept or request to attend court to make representations. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
                          }
                          
                          
                          else if (
                            (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                 ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                 ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                             license === "Less than 2 years" &&
                      (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                      paperwork === "Fixed penalty notice" &&
                      towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
            carriage === "- - -")
                  {
                  console.log('condition 10')
                    display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 days disqualification.. If they wish to consider a disqualification they will send you a notice of disqualification which you can accept or request to attend court to make representations. If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine.If you are a new driver then you should not accept the fixed penalty if you have already accepted one and this is your second. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. If it is your second fixed penalty call us straight away for some FREE advice."
                    }else if (
                      (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                      ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                      ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                        license === "Over 2 years" &&
                          (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                          paperwork === "Single justice procedure notice" &&
                          towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
                carriage === "- - -")
                      {
            console.log('condition 11')
              display.textContent="If you have received your single justice procedure notice then.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points / 7 - 28 days disqualification If they wish to consider a disqualification they will send you a notice of disqualification which you can accept or request to attend court to make representations.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
              }else if (
                (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
                ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
                ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                  license === "Less than 2 years" &&
                                (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                    paperwork === "Single justice procedure notice" &&
                    towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
          carriage === "- - -")
                {
                console.log('condition 12')
        display.textContent="If you have received your single justice procedure notice then.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points / 7 - 28 days disqualification If they wish to consider a disqualification they will send you a notice of disqualification which you can accept or request to attend court to make representations.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine.If you have points on your licence already or even if this is your first offence you should ask for a court hearing unless you are happy for the DLVA to revoke your driving licence. The DLVA will automatically revoke your driving licence, as you will have more than 6 points on your driving licence. You will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old until you pass your driving test again. Call us for FREE advice as we can often avoid revocation."
                }else if (
                  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
                  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
                ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
                    license === "Over 2 years" &&
                      (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
          (paperwork === "None, just stopped or flashed by camera" ||
          paperwork === "Notice of intended prosecution") &&
          towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
carriage === "- - -")
      {
      console.log('condition 13')
        display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band C fine (150% of your weekly income) 6 points/7-56 days disqualification. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself or they will send you a notice of disqualification which you can accept or request to attend court to make representations. If you are given a short disqualification you will not receive any points.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,"
        }else if (
          (((limits === 20 || limits === 30) && recorded_sp === 21) ||
          ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
        ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
            license === "Less than 2 years" &&
              (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
              (paperwork === "None, just stopped or flashed by camera" ||
              paperwork === "Notice of intended prosecution") &&
              towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
    carriage === "- - -")
          {
          console.log('condition 14')
            display.textContent="As a new driver if the court endorse your licence with 6 points the DVLA will automatically revoke your licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us for FREE advice as we can often avoid revocation but you must call before replying to the single justice procedure notice or before a hearing if you have replied to the "
            }else if (
        (((limits === 20 || limits === 30) && recorded_sp === 21) ||
        ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
      ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
          license === "Over 2 years" &&
            (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
            paperwork === "Fixed penalty notice" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
  carriage === "- - -")
        {
        console.log('condition 15')
          display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points  Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
          }else if (
            (((limits === 20 || limits === 30) && recorded_sp === 21) ||
            ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
          ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
              license === "Less than 2 years" &&
            (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
            paperwork === "Fixed penalty notice" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
  carriage === "- - -")
              {
          console.log('condition 16')
            display.textContent="If you are offered a fixed penalty which is your first fixed penalty that you should accept it immediately and take the £100 and 3 points. If you do not you will receive a single justice procedure notice The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points Or up to 56 days disqualification. In your case it is unlikely they will adjourn for a short disqualification because they know that the DVLA will revoke your licence immediately, so it is important to get advice on receipt of either the FPT or the SJPN.If it is your second fixed penalty notice then unless you are content with having your licence revoked until you resit your test you MUST not accept it. Call us immediately for FREE advice."
            }else if (
              (((limits === 20 || limits === 30) && recorded_sp === 21) ||
              ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
            ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
                license === "Over 2 years" &&
                  (points ==="None" || points === 3 || points === 4 || points === 5  ) &&
                  paperwork === "Single justice procedure notice" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
            {
            console.log('condition 17')
            
            display.textContent="The single justice will sentence you in the range of a Band C fine (150% of your weekly income) 6 points/7-56 days disqualification. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
             }else if (
              (((limits === 20 || limits === 30) && recorded_sp === 21) ||
              ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
            ((limits === 60 || limits === 70) && recorded_sp >= 31)) &&
                license === "Less than 2 years" &&
                  (points ==="None" || points === 3 || points === 4 || points === 5 ) &&
                  paperwork === "Single justice procedure notice" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
            {
            console.log('condition 18')
            
            display.textContent="The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points Or up to 56 days disqualification. In your case it is unlikely they will adjourn for a short disqualification because they know that the DVLA will revoke your licence immediately, so it is important to get advice on receipt of either the FPT or the SJPN.If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
             }else if (
              (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
              ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
              ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                license === "Over 2 years" &&
                   points === 6  &&
                  paperwork === "None, just stopped or flashed by camera" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
            {
            console.log('condition 19')
            
            display.innerHTML="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 day disqualification.\n Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself or they will send you a notice of disqualification which you can accept or request to attend court to make representations. If you are given a short disqualification you will not receive any points.\n If the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice.\n If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,"
             }else if (
              (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
              ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
              ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                license === "Less than 2 years" &&
                   points === 6  &&
                  paperwork === "None, just stopped or flashed by camera" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
            {
            console.log('condition 20')
            
            display.innerHTML="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7 -28 day disqualification.\n Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself or they will send you a notice of disqualification which you can accept or request to attend court to make representations. If you are given a short disqualification you will not receive any points.\n If the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice.\n If you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine, \nIf you are a new driver then you should always respond straight away to the NIP if you fail you will be prosecuted. As the penalty has a range of points 4 -6 if the court award 6 points the DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us straight away for some FREE advice"
             }else if (
              (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
              ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
              ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
                license === "Over 2 years" &&
                  points === 6  &&
                  paperwork === "Fixed penalty notice" &&
            towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
              carriage === "- - -")
            {
            console.log('condition 21')
            display.innerHTML="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a B fine (100% of your weekly income) and 4- 6 penalty points  Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
          
          
          }else if (
            (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
            ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
            ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
              license === "Less than 2 years" &&
                points === 6   &&
                paperwork === "Fixed penalty notice" &&
          towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
            carriage === "- - -")
          {
          console.log('condition 22')
          display.innerHTML="If you are offered a fixed penalty which is your first fixed penalty that you should accept it immediately and take the £100 and 3 points. If you do not you will receive a single justice procedure notice The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points / 76-28 days disqualification. In your case it is unlikely they will adjourn for a short disqualification because they know that the DVLA will revoke your licence immediately, so it is important to get advice on receipt of either the FPT or the SJPN. \nIf it is your second fixed penalty notice then unless you are content with having your licence revoked until you resit your test you MUST not accept it. Call us immediately for FREE advice"

      
      }
      
      else if (
        (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
        ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
        ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
          license === "Over 2 years" &&
            points === 6   &&
            paperwork === "Single justice procedure notice" &&
      towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
        carriage === "- - -")
      {
      console.log('condition 23')
      display.textContent="The single justice will sentence you in the range of a Band B fine (100% of your weekly income)4- 6 points/7-28 days disqualification. \nAs you already have 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice."

  }

  else if (
    (((limits === 20 || limits === 30) && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
    ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
    ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) &&
      license === "Less than 2 years" &&
        points === 6   &&
        paperwork === "Single justice procedure notice" &&
  towing  && vehicle && place && conditions && passengers && driving_for === "No" &&
    carriage === "- - -")
  {
  console.log('condition 24')
  display.textContent="If you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA. The court will adjourn to consider disqualification The court will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points 7 - 28 days disqualification but you still fall within the totting up procedure as points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice"

}

else if (
  (( limits += 15 && recorded_sp === 10))  &&               // CHANGE THIS
    license === "Over 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 25')
display.textContent="If you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA. The court will adjourn to consider disqualification The court will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points 7 - 28 days disqualification but you still fall within the totting up procedure as points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice"

}else if (
  (( limits += 15 && recorded_sp === 10))  &&             // CHANGE THIS
    license === "Less than 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 26')
display.textContent="If you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA. The court will adjourn to consider disqualification The court will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points 7 - 28 days disqualification but you still fall within the totting up procedure as points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice. \nIf you are a new driver then you should always take the opportunity to do the course as you need to avoid points because if you get 6 points on your driving record your full driving licence will be revoked"

}else if (
  (( limits += 15 && recorded_sp === 10))  &&                 // CHANGE THIS
    license === "Over 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "Fixed penalty notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 27')
display.textContent="If you have been offered  a fixed penalty notice for £100 and 3 points then you should accept this immediately if you have accepted that you are the driver. It is the most cost effective way of dealing with the offence other than a speed awareness course.  If you ignore the offer of a fixed penalty or do not accept it then the matter will go to court and you will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,"

}else if (
  (( limits += 15 && recorded_sp === 10))  &&        // CHANGE THIS
    license === "Less than 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "Fixed penalty notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 28')
display.textContent="If you have been offered  a fixed penalty notice for £100 and 3 points then you should accept this immediately if you have accepted that you are the driver. It is the most cost effective way of dealing with the offence other than a speed awareness course.  If you ignore the offer of a fixed penalty or do not accept it then the matter will go to court and you will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine, \nIf you are a new driver then you should not accept the fixed penalty if you have already accepted one and this is your second. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. If it is your second fixed penalty call us straight away for some FREE advice."

}else if (
  (( limits += 15 && recorded_sp === 10))  &&           // CHANGE THIS
    license === "Over 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 29')
display.textContent="If you have received your single justice procedure notice then You will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"

}else if (
  (( limits += 15 && recorded_sp === 10))  &&        // CHANGE THIS
    license === "Less than 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 30')
display.textContent="If you have received your single justice procedure notice then You will face a penalty of a Band A fine (50% of weekly income) and 3 points + costs in the region £85-135.  You can respond to this on line with a guilty plea and mitigation or you can write a letter to the court.  They will base your fine on the weekly income. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine. \nIf this is your second offence having accepted a fixed penalty then you should ask for a court hearing unless you are happy for the DLVA to revoke your driving licence. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us for FREE advice."



    }else if (
      ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
    ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
    ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
        license === "Over 2 years" &&
          (points ==="None" || points === 3 || points === 4 || points === 5)   &&
          paperwork === "None, just stopped or flashed by camera" &&
    (towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
      carriage === "Single carriage way")
    {
    console.log('condition 31')
    display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,"
    
    
    
        }else if (
          ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
        ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
        ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
            license === "Less than 2 years" &&
              (points ==="None" || points === 3 || points === 4 || points === 5)   &&
              paperwork === "None, just stopped or flashed by camera" &&
        (towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
          carriage === "Single carriage way")
        {
        console.log('condition 32')
        display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine, \nIf you are a new driver then you should always respond straight away to the NIP if you fail you will be prosecuted. As the penalty has a range of points 4 -6 if the court award 6 points the DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us straight away for some FREE advice"




        }else if (
          ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
        ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
        ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
            license === "Over 2 years" &&
              (points ==="None" || points === 3 || points === 4 || points === 5)   &&
              paperwork === "Fixed penalty notice" &&
        (towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
          carriage === "Single carriage way")
        {
        console.log('condition 33')
        display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points. \nThe court will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7-28 days disqualification. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"
        


        }else if (
          ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
        ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
        ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
            license === "Less than 2 years" &&
              (points ==="None" || points === 3 || points === 4 || points === 5)   &&
              paperwork === "Fixed penalty notice" &&
        (towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
          carriage === "Single carriage way")
        {
        console.log('condition 34')
        display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points.\nThe court will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points/7-28 days disqualification. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine. \nIf this is your second offence having accepted a fixed penalty then you should ask for a court hearing unless you are happy for the DLVA to revoke your driving licence. The DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us for FREE advice."


  }else if (
    ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
  ((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
  ((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
      license === "Over 2 years" &&
        (points ==="None" || points === 3 || points === 4 || points === 5)   &&
        paperwork === "Single justice procedure notice" &&
  (towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
    carriage === "Single carriage way")
  {
  console.log('condition 35')
  display.textContent="The single justice will sentence you in the range of a Band B fine (100% of your weekly income)4 6 points/7-28 days disqualification. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Less than 2 years" &&
      (points ==="None" || points === 3 || points === 4 || points === 5)   &&
      paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 36')
display.textContent="The single justice will sentence you in the range of a Band B  fine (100% of your weekly income) and 4- 6 penalty points / 7 -28 days disqualification. In your case it is unlikely they will adjourn for a short disqualification because they know that the DVLA will revoke your licence immediately, so it is important to get advice on receipt of either the FPT or the SJPN.\nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Over 2 years" &&
      points === 6   &&
      paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 37')
display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Less than 2 years" &&
      points === 6   &&
      paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 38')
display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine,\n If you are a new driver then you should always respond straight away to the NIP if you fail you will be prosecuted. As the penalty has a range of points 4 -6 if the court award 6 points the DLVA will automatically revoke your driving licence and you will have to re-sit your driving test until such time you will have to apply for your provisional driving licence and comply with the regulations L plates and supervisor over 21yrs old. Call us straight away for some FREE advice"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Over 2 years" &&
      points === 6   &&
      paperwork === "Fixed penalty notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 39')
display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4-6 penalty points 7 -28 days disqualification. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Over 2 years" &&
      points === 6   &&
      paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 40')
display.textContent="The single justice will sentence you in the range of a Band B fine (100% of your weekly income) 4-6 points/7-28 days disqualification. Normally the case would be adjourned for you to attend for the court to consider disqualifying you for the offence itself. If you are given a short disqualification you will not receive any points. \nIf the court award 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"


}else if (
  ((limits === 30  && (recorded_sp >= 11  && recorded_sp <= 20 ))  ||
((limits === 40 || limits === 50) && (recorded_sp >= 16  && recorded_sp <= 25 )) ||
((limits === 60 || limits === 70) && (recorded_sp >= 21  && recorded_sp <= 30 ))) && // CHANGE THIS
    license === "Less than 2 years" &&
      points === 6   &&
      paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 41')
display.textContent="The single justice will sentence you in the range of a Band B fine (100% of your weekly income) and 4 -6 penalty points Or 7-28  days disqualification. In your case it is unlikely they will adjourn for a short disqualification because they know that the DVLA will revoke your licence immediately, so it is important to get advice on receipt of either the FPT or the SJPN if you wish to avoid revocation of your driving licence."


}else if (
          (((limits === 20 || limits === 30) && recorded_sp === 21) ||
          ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
        ((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
    license === "Over 2 years" &&
      points === 6   &&
      paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
  carriage === "Single carriage way")
{
console.log('condition 42')
display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice or a speed awareness course. But both of these options are at the police discretion so despite being outside their guidelines some traffic units will offer them so it is always worth when advising that you are the driver that you would be happy to take a speed awareness course. If they do not exercise their discretion then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band C fine (150% of your weekly income) 6 points/7-56 days disqualification. \nAs you already have 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice."


}else if (
  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
license === "Less than 2 years" &&
points === 6   &&
paperwork === "None, just stopped or flashed by camera" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
carriage === "Single carriage way")
{
console.log('condition 43')
display.textContent="If you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA but you still fall within the totting up procedure as the points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice."


}else if (
  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
license === "Over 2 years" &&
points === 6   &&
paperwork === "Fixed penalty notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
carriage === "Single carriage way")
{
console.log('condition 44')
display.textContent="This level of speed will make it highly unlikely that you would be offered a fixed penalty notice But if they do then you should take it straight away if you don’t then they will issue a single justice procedure notice. The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points Or up to 56 days disqualification. \n As you already have 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice. \nIf you plead guilty at the first opportunity ie Single justice procedure then you will get 33% credit off your fine"


}else if (
  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
license === "Less than 2 years" &&
points === 6   &&
paperwork === "Fixed penalty notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
carriage === "Single carriage way")
{
console.log('condition 45')
display.textContent="If you are offered a fixed penalty which is your first fixed penalty that you should accept it immediately and take the £100 and 3 points. If you do not you will receive a single justice procedure notice The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points / 7-56 days disqualification. \nIf you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA but you still fall within the totting up procedure as points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice. \nIf it is your second fixed penalty notice then unless you are content with having your licence revoked until you resit your test you MUST not accept it. Call us immediately for FREE advice"


}else if (
  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
license === "Over 2 years" &&
points === 6   &&
paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
carriage === "Single carriage way")
{
console.log('condition 46')
display.textContent="The single justice will sentence you in the range of a Band C fine (150% of your weekly income) 6 points/7-56 days disqualification. \nAs you already have 6 points on your licence then you are eligible to be disqualified under the totting up procedure ie more than 12 points, so the single justice will adjourn for that disqualification to be considered. You will be at a high risk of losing your licence for 6 months so we would advise that you call us immediately for advice."


}else if (
  (((limits === 20 || limits === 30) && recorded_sp === 21) ||
  ((limits === 40 || limits === 50) && recorded_sp >= 26) ||
((limits === 60 || limits === 70) && recorded_sp >= 31)) && // CHANGE THIS
license === "Less than 2 years" &&
points === 6   &&
paperwork === "Single justice procedure notice" &&
(towing  && vehicle === "Yes") && place && conditions && passengers && driving_for === "No" &&
carriage === "Single carriage way")
{
console.log('condition 47')
display.textContent="If you already have 6 points as a new driver you should have had your licence revoked and re-sat your test to obtain a full driving licence again. That being the case then your licence will not be revoked by the DLVA but you still fall within the totting up procedure as points remain on your licence so you will fall to be disqualified for a period of 6 months. You should call us immediately for FREE advice. \n The single justice will sentence you in the range of a Band C fine (150% of your weekly income) and 6 penalty points Or up to 56 days disqualification. In your case it is unlikely they will adjourn for a short disqualification because you will be eligible for a totting up disqualification of 6 months"


}



}