module.exports = function template(body) {
  return ` 
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <!-- Header with Logo -->
        <div style="background-color: #4CAF50; padding: 20px; text-align: center;">
          <img src="/client/public/logo.png" alt="Studysyncs logo" style="width: 150px; height: 50px;"/>
        </div>
        ${body}
        <!-- Footer -->
        <div style="background-color: #f9f9f9; padding: 10px; text-align: center; font-size: 0.9em; color: #666;">
          <p style="margin: 0;">© ${new Date().getFullYear()} Studysyncs. All rights reserved.</p>
        </div>
      </div>`;
};
