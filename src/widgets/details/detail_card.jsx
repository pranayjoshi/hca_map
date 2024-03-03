export default function DetailCard(data) {
    // console.log(data)
    data = data.data
    // console.log(data)
    return (
        <div>
            <div className="h-full border border-gray-300 bg-white rounded-lg p-2">
                <h1 className="text-center text-2xl text-semibold py-3">{data.facility_name}</h1>
                <hr />
                <div className="flex flex-col items-left">
                    <p className="text-lg text-semibold py-3">Facility ID: {data.facility_id}</p>
                    <p className="text-lg text-semibold py-3">Address: {data.facility_address1}</p>
                    <p className="text-lg text-semibold py-3">COID: {data.facility_coid}</p>
                    <p className="text-lg text-semibold py-3">Division name: {data.division_name} ({data.division_mnem})</p>
                    <p className="text-lg text-semibold py-3">Timezone: {data.tz_description} ({data.timezone})</p>
                    <p className="text-lg text-semibold py-3">EMR: {data.emr_name} ({data.emr_mnem})</p>
                </div>
            </div>
        </div>
    )
}