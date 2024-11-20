import { ContentBoxed } from "@/components/template/ContentBoxed";
import { Page } from "@/components/template/Page";
import { getAddresses } from "@/api/endpoints";
import { useEffect, useState } from "react";
export function Perfil() {
	const [addresses, setAddresses] = useState([]);
	useEffect(() => {
		getAddresses().then((data) => {
			setAddresses(data);
		});
	}, []);

	console.log(addresses);
	return (
		<Page className="flex justify-center items-center">
			<ContentBoxed className="space-y-10 mb-20">
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and information.</p>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Full name</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">John Doe</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Email address</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">john.doe@example.com</dd>
							</div>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Phone number</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">(555) 555-5555</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">Address</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">123 Main St, Springfield, IL</dd>
							</div>
						</dl>
					</div>
				</div>
			</ContentBoxed>
		</Page>
	);
}
