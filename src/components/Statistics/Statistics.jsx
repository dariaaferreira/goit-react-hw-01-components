export const Statistics = ({ title, stats}) => {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
            {stats.map(data => (
                <li key={data.id} class="item">
                <span class="label">{data.label}</span>
                <span class="percentage">{data.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    );
};


