import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import setInitialData from "@/utils/set_initial_data";
import { useDispatch } from "react-redux";
import { setDisplayIds, setDispl } from "../../state/slice";

export default function Filter() {
  async function fetchData() {
    try {
      const data = await setInitialData();
      // console.log(data); // This should now be an array
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  const dispatch = useDispatch();
  const vals_state = [
    { value: "VA", label: "VA" },
    { value: "NH", label: "NH" },
    { value: "IN", label: "IN" },
    { value: "TX", label: "TX" },
    { value: "KS", label: "KS" },
    { value: "CO", label: "CO" },
    { value: "FL", label: "FL" },
    { value: "CA", label: "CA" },
    { value: "NV", label: "NV" },
    { value: "TN", label: "TN" },
    { value: "OH", label: "OH" },
    { value: "GA", label: "GA" },
    { value: "MO", label: "MO" },
    { value: "LA", label: "LA" },
    { value: "UT", label: "UT" },
    { value: "ID", label: "ID" },
    { value: "AK", label: "AK" },
    { value: "NC", label: "NC" },
    { value: "SC", label: "SC" },
    { value: "KY", label: "KY" },
  ];
  const vals_division = [
    { value: "Capital", label: "Capital" },
    { value: "Central West Tx", label: "Central West Tx" },
    { value: "Continental", label: "Continental" },
    { value: "East Florida", label: "East Florida" },
    { value: "Far West", label: "Far West" },
    { value: "Gulf Coast", label: "Gulf Coast" },
    { value: "HCA Corp", label: "HCA Corp" },
    { value: "HSC", label: "HSC" },
    { value: "MidAmerica", label: "MidAmerica" },
    { value: "Mountain", label: "Mountain" },
    { value: "North Carolina", label: "North Carolina" },
    { value: "North Florida", label: "North Florida" },
    { value: "North Texas", label: "North Texas" },
    { value: "Physician Services Group", label: "Physician Services Group" },
    { value: "San Antonio", label: "San Antonio" },
    { value: "South Atlantic", label: "South Atlantic" },
    { value: "Supply Chain", label: "Supply Chain" },
    { value: "Tristar", label: "Tristar" },
    { value: "West Florida", label: "West Florida" },
  ];
  const vals_emr = [
    { value: "Meditech 5.6", label: "Meditech 5.6" },
    { value: "VAA", label: "VAA" },
    { value: "Need to Identify", label: "Need to Identify" },
    { value: "Meditech Expanse GCP", label: "Meditech Expanse GCP" },
    { value: "*None", label: "*None" },
    { value: "EPIC", label: "EPIC" },
    { value: "Cerner", label: "Cerner" },
    { value: "Meditech 6.x/Expanse", label: "Meditech 6.x/Expanse" },
  ];
  const vals_tz = [
    { value: "Eastern Time Zone", label: "Eastern Time Zone" },
    { value: "Central Time Zone", label: "Central Time Zone" },
    { value: "Mountain Time Zone", label: "Mountain Time Zone" },
    { value: "Pacific Time Zone", label: "Pacific Time Zone" },
    { value: "Alaska Time Zone", label: "Alaska Time Zone" },
  ];
  const vals_addr = [
    // {
    //   value: "1 Alleghany Regional Hospital Lane",
    //   label: "1 Alleghany Regional Hospital Lane",
    // },
    // { value: "930 S. Ave", label: "930 S. Ave" },
    // { value: "-77.38991774019478", label: "-77.38991774019478" },
    { value: "4330 Brambleton Avenue", label: "4330 Brambleton Avenue" },
    { value: "2612 Burford Road", label: "2612 Burford Road" },
    { value: "13636 Hull Street Road", label: "13636 Hull Street Road" },
    {
      value: "1401 Johnston-Willis Drive",
      label: "1401 Johnston-Willis Drive",
    },
    {
      value: "110 N. Robinson Steet. Suite 201",
      label: "110 N. Robinson Steet. Suite 201",
    },
    { value: "2960 Sleepy Hollow Road", label: "2960 Sleepy Hollow Road" },
    { value: "1602 Skipwith Rd", label: "1602 Skipwith Rd" },
    { value: "411 W Randolph Rd", label: "411 W Randolph Rd" },
    { value: "1900 Electric Rd", label: "1900 Electric Rd" },
    { value: "3700 S Main St", label: "3700 S Main St" },
    { value: "1 Parkland Dr", label: "1 Parkland Dr" },
    { value: "333 Borthwick Ave", label: "333 Borthwick Ave" },
    { value: "2400 Lee Hwy", label: "2400 Lee Hwy" },
    { value: "1850 Town Center Pkwy", label: "1850 Town Center Pkwy" },
    { value: "4600 Spotsylvania Parkway", label: "4600 Spotsylvania Parkway" },
    { value: "24440 Stone Springs Blvd", label: "24440 Stone Springs Blvd" },
    { value: "3901 S 7th St", label: "3901 S 7th St" },
    { value: "11 Whitehall Road", label: "11 Whitehall Road" },
    { value: "333 Borthwick", label: "333 Borthwick" },
    { value: "2000 Scenic Drive", label: "2000 Scenic Drive" },
    { value: "919 E 32nd St", label: "919 E 32nd St" },
    { value: "901 West Ben White Blvd", label: "901 West Ben White Blvd" },
    { value: "1210 West Henna Blvd", label: "1210 West Henna Blvd" },
    { value: "2400 Round Rock Ave", label: "2400 Round Rock Ave" },
    { value: "1801 North Oregon Street", label: "1801 North Oregon Street" },
    { value: "12221 MoPac Expressway", label: "12221 MoPac Expressway" },
    { value: "3801 N Lamar Blvd", label: "3801 N Lamar Blvd" },
    { value: "10301 Gateway West", label: "10301 Gateway West" },
    { value: "4900 South Monaco Street", label: "4900 South Monaco Street" },
    { value: "-104.91078614633304", label: "-104.91078614633304" },
    { value: "2610 North Woodlawn", label: "2610 North Woodlawn" },
    { value: "1501 S Potomac St", label: "1501 S Potomac St" },
    { value: "9191 Grant St", label: "9191 Grant St" },
    { value: "4567 East Ninth Avenue", label: "4567 East Ninth Avenue" },
    { value: "10101 RidgeGate Pkwy", label: "10101 RidgeGate Pkwy" },
    { value: "1719 E 19th Ave", label: "1719 E 19th Ave" },
    { value: "900 Potomac St", label: "900 Potomac St" },
    { value: "501 E Hampden Ave", label: "501 E Hampden Ave" },
    { value: "550 N Hillside Street", label: "550 N Hillside Street" },
    {
      value: "10151 Enterprise Center Blvd",
      label: "10151 Enterprise Center Blvd",
    },
    { value: "8201 W Broward Blvd", label: "8201 W Broward Blvd" },
    { value: "7201 N University Dr", label: "7201 N University Dr" },
    { value: "401 NW 42nd Ave", label: "401 NW 42nd Ave" },
    { value: "1800 SE Tiffany Ave", label: "1800 SE Tiffany Ave" },
    { value: "3335 Burns Rd. Suite 101", label: "3335 Burns Rd. Suite 101" },
    { value: "13001 Southern Blvd", label: "13001 Southern Blvd" },
    { value: "3663 South Miami Avenue", label: "3663 South Miami Avenue" },
    { value: "1796 Hwy 441 North", label: "1796 Hwy 441 North" },
    {
      value: "3476 South University Drive",
      label: "3476 South University Drive",
    },
    {
      value: "3600 South Highlands Avenue",
      label: "3600 South Highlands Avenue",
    },
    { value: "2801 N State Rd 7", label: "2801 N State Rd 7" },
    { value: "1700 S 23rd St", label: "1700 S 23rd St" },
    { value: "11750 Bird Rd", label: "11750 Bird Rd" },
    { value: "300 East Las Olas Blvd", label: "300 East Las Olas Blvd" },
    { value: "5301 South Congress Ave", label: "5301 South Congress Ave" },
    { value: "2201 45th St", label: "2201 45th St" },
    {
      value: "450 East Las Olas Blvd.. Suite 1100",
      label: "450 East Las Olas Blvd.. Suite 1100",
    },
    { value: "20900 Biscayne Blvd", label: "20900 Biscayne Blvd" },
    { value: "2425 Samaritan Dr", label: "2425 Samaritan Dr" },
    { value: "215 West Janss Rd", label: "215 West Janss Rd" },
    { value: "225 North Jackson Ave", label: "225 North Jackson Ave" },
    { value: "4445 Magnolia Ave", label: "4445 Magnolia Ave" },
    {
      value: "4000 14th Street Suite 109",
      label: "4000 14th Street Suite 109",
    },
    { value: "9300 West Sunset Rd", label: "9300 West Sunset Rd" },
    { value: "7300 Medical Center Dr", label: "7300 Medical Center Dr" },
    { value: "3186 S Maryland Parkway", label: "3186 S Maryland Parkway" },
    { value: "3100 N Tenaya Way", label: "3100 N Tenaya Way" },
    { value: "7401 South Main", label: "7401 South Main" },
    { value: "1533 South Brownlee", label: "1533 South Brownlee" },
    { value: "12141 Richmond Ave", label: "12141 Richmond Ave" },
    { value: "7600 Fannin", label: "7600 Fannin" },
    { value: "100 A Alton Gloor Blvd", label: "100 A Alton Gloor Blvd" },
    { value: "605 Holderrieth Blvd", label: "605 Holderrieth Blvd" },
    { value: "101 E Ridge Rd", label: "101 E Ridge Rd" },
    {
      value: "11100 Shadow Creek Parkway",
      label: "11100 Shadow Creek Parkway",
    },
    { value: "1313 Hermann Drive", label: "1313 Hermann Drive" },
    { value: "1300 Binz Street", label: "1300 Binz Street" },
    { value: "710 Cypress Creek Parkway", label: "710 Cypress Creek Parkway" },
    { value: "10655 Steepletop Drive", label: "10655 Steepletop Drive" },
    { value: "21214 NW Freeway", label: "21214 NW Freeway" },
    { value: "6801 E.F. Lowry Expwy", label: "6801 E.F. Lowry Expwy" },
    { value: "22999 Hwy 59 North", label: "22999 Hwy 59 North" },
    { value: "7105 S Padre Island Dr", label: "7105 S Padre Island Dr" },
    { value: "12610 West Airport Blvd", label: "12610 West Airport Blvd" },
    { value: "-95.60324317561593", label: "-95.60324317561593" },
    { value: "504 Medical Center Blvd", label: "504 Medical Center Blvd" },
    { value: "500 Medical Center Blvd", label: "500 Medical Center Blvd" },
    { value: "4000 Spencer Hwy", label: "4000 Spencer Hwy" },
    { value: "2555 Park Plaza", label: "2555 Park Plaza" },
    {
      value: "1100 Charlotte Ave Suite 1100",
      label: "1100 Charlotte Ave Suite 1100",
    },
    { value: "One Park Plaza", label: "One Park Plaza" },
    { value: "10030 Macarthur Blvd", label: "10030 Macarthur Blvd" },
    { value: "xxx", label: "xxx" },
    { value: "5707 Peachtree Pkwy.", label: "5707 Peachtree Pkwy." },
    {
      value: "8101 W. Sam Houston Parkway",
      label: "8101 W. Sam Houston Parkway",
    },
    { value: "552 Metroplex Dr.", label: "552 Metroplex Dr." },
    { value: "335 Crossing Blvd", label: "335 Crossing Blvd" },
    { value: "7300 Beaufont Springs Dr.", label: "7300 Beaufont Springs Dr." },
    { value: "6451 - 126th Avenue North", label: "6451 - 126th Avenue North" },
    {
      value: "6000 Northwest Pkwy. Ste 124",
      label: "6000 Northwest Pkwy. Ste 124",
    },
    { value: "10500 Quivira Road", label: "10500 Quivira Road" },
    { value: "1500 State Street", label: "1500 State Street" },
    { value: "2100 SE Blue Parkway", label: "2100 SE Blue Parkway" },
    { value: "5721 W. 119th Street", label: "5721 W. 119th Street" },
    { value: "10500 Quivira", label: "10500 Quivira" },
    { value: "19600 E 39th Street", label: "19600 E 39th Street" },
    { value: "129 New Camellia Bldv", label: "129 New Camellia Bldv" },
    { value: "17065 S. 71 Highway", label: "17065 S. 71 Highway" },
    { value: "2316 E. Meyer Blvd.", label: "2316 E. Meyer Blvd." },
    { value: "1200 E 3900 South", label: "1200 E 3900 South" },
    { value: "3715 W. 4100 S", label: "3715 W. 4100 S" },
    { value: "1717 Arlington Ave", label: "1717 Arlington Ave" },
    { value: "750 W 800 North", label: "750 W 800 North" },
    { value: "6360 South 3000 East", label: "6360 South 3000 East" },
    { value: "-111.80672870395232", label: "-111.80672870395232" },
    { value: "3100 Channing Way", label: "3100 Channing Way" },
    { value: "950 S 500 West", label: "950 S 500 West" },
    { value: "2801 DeBarr Rd", label: "2801 DeBarr Rd" },
    { value: "2380 North 400 East", label: "2380 North 400 East" },
    {
      value: "5322 S. 400 E. Washington Terrace",
      label: "5322 S. 400 E. Washington Terrace",
    },
    { value: "5475 S 500 East", label: "5475 S 500 East" },
    { value: "3738 South 900 East", label: "3738 South 900 East" },
    { value: "1000 E Hwy 6", label: "1000 E Hwy 6" },
    { value: "11620 South State Street", label: "11620 South State Street" },
    { value: "630 E Medical Dr", label: "630 E Medical Dr" },
    { value: "12 Ardmore Street", label: "12 Ardmore Street" },
    { value: "509 Biltmore Ave", label: "509 Biltmore Ave" },
    { value: "120 Riverview Street", label: "120 Riverview Street" },
    { value: "125 Hospital Drive", label: "125 Hospital Drive" },
    { value: "428 Biltmore Ave", label: "428 Biltmore Ave" },
    { value: "430 Rankin Drive", label: "430 Rankin Drive" },
    { value: "26 Hospital Drive", label: "26 Hospital Drive" },
    { value: "190 Hospital Drive", label: "190 Hospital Drive" },
    { value: "260 Crestland Road", label: "260 Crestland Road" },
    { value: "2190 Hwy 85 North", label: "2190 Hwy 85 North" },
    { value: "6605 NW 9th Blvd", label: "6605 NW 9th Blvd" },
    { value: "6680 Lake Nona Blvd", label: "6680 Lake Nona Blvd" },
    { value: "8383 Davis Hwy", label: "8383 Davis Hwy" },
    { value: "325 Cypress Parkway", label: "325 Cypress Parkway" },
    { value: "Hwy 20 West", label: "Hwy 20 West" },
    { value: "340 NW Commerce Dr.", label: "340 NW Commerce Dr." },
    { value: "449 W 23rd St", label: "449 W 23rd St" },
    { value: "8350 Red Bug Lake Road", label: "8350 Red Bug Lake Road" },
    { value: "1431 SW 1st Ave", label: "1431 SW 1st Ave" },
    { value: "700 West Oak St", label: "700 West Oak St" },
    { value: "1500 Ohio Ave North", label: "1500 Ohio Ave North" },
    { value: "795 SW State Road 47", label: "795 SW State Road 47" },
    { value: "2003 Centre Point Blvd", label: "2003 Centre Point Blvd" },
    { value: "1021 NW 64th Terrace", label: "1021 NW 64th Terrace" },
    { value: "6500 Newberry Rd", label: "6500 Newberry Rd" },
    { value: "2626 Capital Medical Blvd", label: "2626 Capital Medical Blvd" },
    { value: "1401 W Seminole Blvd", label: "1401 W Seminole Blvd" },
    { value: "1000 Marwalt Dr", label: "1000 Marwalt Dr" },
    { value: "3535 South I-35 East", label: "3535 South I-35 East" },
    { value: "4401 Booth Calloway Rd", label: "4401 Booth Calloway Rd" },
    { value: "4500 Medical Center Dr", label: "4500 Medical Center Dr" },
    { value: "500 W Main St", label: "500 W Main St" },
    { value: "6800 N McArthur Blvd", label: "6800 N McArthur Blvd" },
    { value: "7808 Clodus Fields Drive", label: "7808 Clodus Fields Drive" },
    {
      value: "3101 North Tarrant County Parkway",
      label: "3101 North Tarrant County Parkway",
    },
    { value: "3301 Matlock Rd", label: "3301 Matlock Rd" },
    { value: "3901 W 15th St", label: "3901 W 15th St" },
    { value: "7777 Forest Lane", label: "7777 Forest Lane" },
    { value: "5500 Frisco Square Blvd", label: "5500 Frisco Square Blvd" },
    { value: "211 Fourth St", label: "211 Fourth St" },
    { value: "900 Eighth Ave", label: "900 Eighth Ave" },
    { value: "11990 N Central Expy", label: "11990 N Central Expy" },
    { value: "713 East Anderson Street", label: "713 East Anderson Street" },
    { value: "5361 NW 33rd Avenue", label: "5361 NW 33rd Avenue" },
    { value: "8109 Fredericksburg Rd", label: "8109 Fredericksburg Rd" },
    { value: "9150 Huebner Rd", label: "9150 Huebner Rd" },
    { value: "8026 Floyd Curl Dr", label: "8026 Floyd Curl Dr" },
    { value: "1139 E. Sonterra Blvd", label: "1139 E. Sonterra Blvd" },
    { value: "6700 IH 10 West", label: "6700 IH 10 West" },
    { value: "1310 McCullough", label: "1310 McCullough" },
    { value: "12412 Judson Rd", label: "12412 Judson Rd" },
    { value: "1905 Texas 91", label: "1905 Texas 91" },
    { value: "7700 Floyd Curl Dr", label: "7700 Floyd Curl Dr" },
    { value: "9330 Medical Plaza Dr", label: "9330 Medical Plaza Dr" },
    {
      value: "4901 Richard St P.O. Box 10398",
      label: "4901 Richard St P.O. Box 10398",
    },
    { value: "4700 Waters Avenue", label: "4700 Waters Avenue" },
    { value: "One Meadows Parkway", label: "One Meadows Parkway" },
    { value: "3445 Ingleside Blvd", label: "3445 Ingleside Blvd" },
    { value: "2001 Kingsley Ave", label: "2001 Kingsley Ave" },
    { value: "1900 Tabeau Street", label: "1900 Tabeau Street" },
    { value: "3625 University Blvd", label: "3625 University Blvd" },
    {
      value: "115 Central Island St Suite 400",
      label: "115 Central Island St Suite 400",
    },
    { value: "200 Industrial Blvd", label: "200 Industrial Blvd" },
    { value: "809 82nd Pkwy", label: "809 82nd Pkwy" },
    { value: "3651 Wheeler Rd", label: "3651 Wheeler Rd" },
    { value: "501 Robertson Blvd", label: "501 Robertson Blvd" },
    {
      value: "3599 University Blvd. South",
      label: "3599 University Blvd. South",
    },
    { value: "4520 Florence Street", label: "4520 Florence Street" },
    { value: "10094 Premier Parkway", label: "10094 Premier Parkway" },
    { value: "1120 W. Sportsplexn Drive", label: "1120 W. Sportsplexn Drive" },
    { value: "10405 W 79th Street", label: "10405 W 79th Street" },
    { value: "245B Great Circle Road", label: "245B Great Circle Road" },
    { value: "129 New Camellia Blvd", label: "129 New Camellia Blvd" },
    {
      value: "85011 Westside Industrial Drive",
      label: "85011 Westside Industrial Drive",
    },
    { value: "1151 Enterprise Drive", label: "1151 Enterprise Drive" },
    { value: "200 Wadsworth Drive", label: "200 Wadsworth Drive" },
    { value: "299 Kings Daughters Dr", label: "299 Kings Daughters Dr" },
    { value: "313 N Main St", label: "313 N Main St" },
    { value: "2300 Patterson St", label: "2300 Patterson St" },
    { value: "1801 Ashley Cir", label: "1801 Ashley Cir" },
    { value: "355 New Shackle Island Rd", label: "355 New Shackle Island Rd" },
    { value: "111 Hwy 70 East", label: "111 Hwy 70 East" },
    {
      value: "1001 North James Campbell Boulevard",
      label: "1001 North James Campbell Boulevard",
    },
    { value: "200 Stonecrest Blvd.", label: "200 Stonecrest Blvd." },
    { value: "5655 Frist Blvd", label: "5655 Frist Blvd" },
    { value: "500 Hospital Drive", label: "500 Hospital Drive" },
    { value: "391 Wallace Rd", label: "391 Wallace Rd" },
    { value: "3441 Dickerson Pike", label: "3441 Dickerson Pike" },
    { value: "501 Redmond Rd", label: "501 Redmond Rd" },
    { value: "941 Spring Creek Rd", label: "941 Spring Creek Rd" },
    { value: "2333 McCallie Avenue", label: "2333 McCallie Avenue" },
    { value: "1000 Highway 28", label: "1000 Highway 28" },
    { value: "1501 Pasadena Ave", label: "1501 Pasadena Ave" },
    { value: "14000 Fivay Rd", label: "14000 Fivay Rd" },
    { value: "4016 State Rd 674", label: "4016 State Rd 674" },
    { value: "6001 Webb Road", label: "6001 Webb Road" },
    { value: "2025 Indian Rocks Road", label: "2025 Indian Rocks Road" },
    { value: "6500 38th Ave North", label: "6500 38th Ave North" },
    { value: "2901 Swann Ave", label: "2901 Swann Ave" },
    { value: "201 14th St SW", label: "201 14th St SW" },
    { value: "5637 Marine Parkway", label: "5637 Marine Parkway" },
    { value: "11375 Cortez Blvd", label: "11375 Cortez Blvd" },
    { value: "119 Oakfield Dr", label: "119 Oakfield Dr" },
    { value: "12037 Cortez Blvd", label: "12037 Cortez Blvd" },
    { value: "2020 59th St West", label: "2020 59th St West" },
    { value: "502 W Highland Blvd", label: "502 W Highland Blvd" },
    {
      value: "3031 N. Rocky Point Drive West",
      label: "3031 N. Rocky Point Drive West",
    },
    { value: "700 Medical Blvd", label: "700 Medical Blvd" },
    { value: "5731 Bee Ridge Rd", label: "5731 Bee Ridge Rd" },
    { value: "21298 Olean Blvd NW", label: "21298 Olean Blvd NW" },
  ];

  return (
    <div className="h-full w-1/6 items-center justify-center place-items-center shadow-xl p-4 bg-white rounded-lg">
      <h1 className="text-center text-3xl font-semibold py-2 mb-4">Filter</h1>
      <div className=" items-center justify-center">
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">ADDRESS</p>
          <Combobox fm={vals_addr} selectedState="facility_address1" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} selectedState="facility_state" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">DIVISION</p>
          <Combobox fm={vals_division} selectedState="division_name" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">TIME ZONE</p>
          <Combobox fm={vals_tz} selectedState="tz_description" />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">EMR NAME</p>
          <Combobox fm={vals_emr} selectedState="emr_name" />
        </div>

        {/* <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">DIVISION</p>
          <Combobox fm={vals_emr} selectedState="emr_name" />
        </div> */}

        <Button
          onClick={() => dispatch(setDispl())}
          className="mt-6 block mx-auto"
        >
          Reset
        </Button>
        {/* <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} />
        </div>
        <div className="my-2">
          <p className="text-sm font-semibold pl-1 py-4">STATE</p>
          <Combobox fm={vals_state} />
        </div> */}
      </div>
    </div>
  );
}
