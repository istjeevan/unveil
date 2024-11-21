export const ActivityContent = ({ icon }) => (
    <div className="mt-3">
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">2024</h3>
            <span className="border bg-gray-200 rounded-md px-1 text-gray-600">
                This week
            </span>
            <div className="mt-4 space-y-4">
                <div className="p-4 pt-2 border-2 border-purple-400 rounded-lg">
                    <div className="flex items-center justify-between">
                        <p className="mt-2 text-lg font-semibold">Aryo and Bima met with Lisa, Michael, +4</p>
                        <button className="border border-gray-400 bg-gray-200 rounded-md px-1 text-gray-600">Meeting</button>
                    </div>
                    <p className="text-gray-400">{`EDPO <> Unveil: Monthly Sync`}</p>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">2023</h3>
            <span className="border bg-gray-200 rounded-md px-1 text-gray-600">
                December
            </span>
            <div className="mt-4 space-y-4">
                <div className="p-4 pt-2 border-2 border-purple-400 rounded-lg">
                    <div className="flex items-center justify-between">
                        <p className="mt-2 text-lg font-semibold">Bima emailed Lisa and Michael</p>
                        <button className="border border-gray-400 bg-gray-200 rounded-md px-1 text-gray-600">Email</button>
                    </div>
                    <p className="text-gray-400">Subject: Follow-Up on AI Scaling and Integration Needs + Demo Preparation</p>
                    <span className="bg-white border inline-flex items-center px-1 rounded-md text-gray-600 mt-1">
                        <img src={icon} alt="call" className="w-3 h-3" />
                        <span className="ml-1">Technical Specs</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
);