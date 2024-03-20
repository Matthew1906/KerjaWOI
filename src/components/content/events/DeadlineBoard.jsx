import { Title } from "@/components/utils";
import DeadlineCard from "./DeadlineCard";
import styles from "@/app/lib/css/scrollbar.module.css"
import { poppins_700 } from "@/app/lib/font";

const DeadlineBoard = ({ title, deadlines, purpose }) => {
    return (
      <div className={`px-2 max-h-screen overflow-y-auto scroll-smooth ${styles.scrollbar}`}>
        <Title size="md" className={poppins_700.className}>{title}</Title>
        {deadlines.map((val, key) => {
          return (
            <DeadlineCard
              key={key}
              team={val.team}
              desc={val.desc}
              date={val.date}
              time={val.time}
              purpose={purpose}
              attendees={val?.attendees}
            />
          );
        })}
      </div>
    );
  };
  
export default DeadlineBoard;