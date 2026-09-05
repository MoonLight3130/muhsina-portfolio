export const protectAdmin = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace(/^Bearer\s+/i, '');
  const expectedKey = process.env.ADMIN_API_KEY || 'portfolio_admin_secret_key_2026';

  if (!apiKey || apiKey !== expectedKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Access denied. Valid admin API key is required.',
    });
  }

  next();
};
