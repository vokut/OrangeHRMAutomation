import mysql from 'mysql2/promise';

export async function deleteCandidates() {
    if (process.env.CI === 'true') {
        return; // Skip deletion in CI environment
    }
    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'orangehrm',
            multipleStatements: true
        });

        await connection.query(
            `DELETE FROM ohrm_job_candidate_history;
     DELETE FROM ohrm_job_candidate_attachment; 
     DELETE FROM ohrm_job_candidate;`
        );
    } catch (error) {
        throw new Error('❌ Error deleting candidates:', error);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}