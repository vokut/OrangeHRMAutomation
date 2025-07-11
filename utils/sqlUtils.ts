import mysql from 'mysql2/promise';

export async function deleteCandidates() {
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
        console.log('Candidates deleted successfully');
    } catch (error) {
        throw new Error('❌ Error deleting candidates:', error);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}