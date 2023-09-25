// import { IoLocationOutline} from "react-icons/md";


const Job = ({job}) => {
    const {logo , job_title , company_name , remote_or_onsite , job_type ,salary , location} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 border rounded font-extrabold border-blue-500 text-blue-600 mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 border rounded font-extrabold border-blue-500 text-blue-600 mr-4">{job_type}</button>
          </div>
          <div className="flex gap-4">
            <h2>{location}</h2>
            <h2>{salary}</h2>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>

        </div>
      </div>
    );
};

export default Job;